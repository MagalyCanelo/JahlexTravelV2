// Cambié las rutas de importación para que coincidan con la estructura del proyecto

import { doc, getDoc, setDoc } from "firebase/firestore";
import MercadoPagoConfig, { Payment, Preference } from "mercadopago";
import { ShoppingCarTour } from "./interface/Tour";
import { db } from "./config/config";
import {
  cleanUserShoppingCar,
  createPurchase,
} from "../service/FirebaseService";

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export const api = {
  message: {
    async submit(
      cart: ShoppingCarTour,
      userId: string,
      email: string
    ): Promise<string> {
      // Creamos la preferencia incluyendo el precio, titulo y metadata. La información de `items` es standard de Mercado Pago. La información que nosotros necesitamos para nuestra DB debería vivir en `metadata`.
      console.log("Tours en el carrito:", cart.tours);
      // Si hay al menos un elemento en el carrito, generamos la lista de items normalmente
      const itemsList =
        Array.isArray(cart.tours) && cart.tours.length > 0
          ? cart.tours.map((tour: any, idx: number) => ({
              id: tour.id?.toString() || idx.toString(), // Aseguramos unicidad
              title: tour.title || "Tour",
              unit_price: Number.parseInt(tour.price),
              quantity: tour.quantity || 1,
              currency_id: "PEN",
            }))
          : []; // Si no hay elementos, devolvemos un array vacío
      const preference = await new Preference(mercadopago!).create({
        body: {
          // Primero generamos la lista de items y la retornamos para poder setearla después

          items: itemsList,
          taxes: [
            {
              type: "IGV",
              value: 18,
            },
          ],
          payer: {
            email: email,
          },
          notification_url:
            "https://jahlex-travel-v2.vercel.app/api/mercadopago/pago",
          metadata: {
            cart,
            email,
            userId,
          },
        },
      });

      // Devolvemos el init point (url de pago) para que el usuario pueda pagar
      return JSON.stringify({
        url: preference.init_point!,
        id: preference.id!,
        orderData: {
          deliveryStatus: "EN_PROCESO",
          items: cart.tours.map((tour: any) => ({
            ...tour,
          })),
          orderDate: new Date().toISOString(),
          orderId: preference.id?.toString() || "",
          userId: userId || "",
          totalAmount: (
            cart.tours.reduce(
              (sum: number, tour: any) =>
                sum + Number(tour.price) * (tour.quantity || 1),
              0
            ) * 1.18
          ).toFixed(2), // Calcula el total con 18% de IGV y lo fija a 2 decimales
          payment: {
            status: "PENDING", // Set default or actual payment status
            transactionId: preference.id!,
          },
        },
      });
    },
    async add(id: string): Promise<void> {
      try {
        const payment = await new Payment(mercadopago).get({ id });

        if (payment.status === "approved") {
          const paymentDoc = await getDoc(doc(db, "pagos", id));

          if (!paymentDoc.exists()) {
            // Si el pago no existe en Firestore, lo agregamos
            const { cart, userId, email } = payment.metadata;

            await setDoc(doc(db, "pagos", id), {
              cart: cart,
              email: email,
              createdAt: new Date(),
            });

            // Aquí deberías implementar la lógica para crear la orden en tu base de datos si es necesario
            // Por ejemplo: await createOrder(...)
            // Actualmente solo se limpia el carrito
            console.log(email);
            await cleanUserShoppingCar(userId);

            console.log(`Payment ${id} successfully added to Firestore`);
          }
        }
      } catch (error) {
        console.error("Error adding payment to Firestore:", error);
        throw error;
      }
    },
  },
};
