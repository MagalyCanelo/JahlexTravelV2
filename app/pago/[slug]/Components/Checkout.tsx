"use client";
import CartNotice from "./CartNotice";
import CheckoutForm from "./CheckoutForm";
import ShoppingDetails from "./ShoppingDetails";
import { ShoppingCarTour } from "@/app/interface/Tour";
import { useUserStore } from "@/app/store/Usuario";
import { getUserShoppingCar } from "@/service/FirebaseService";
import { useEffect, useState } from "react";

function CheckoutPage() {
  const { user } = useUserStore();
  const [userShoppingCar, setUserShoppingCar] = useState<ShoppingCarTour | null>(null);
  const [tourName, setTourName] = useState("");

  useEffect(() => {
    getUserShoppingCar(user.id!).then((v) => {
      setUserShoppingCar(v);
      // Obtener el nombre del primer tour en el carrito
      if (v && v.tours && v.tours.length > 0) {
        setTourName(v.tours[0].title);
      }
    });
  }, [user.id]);

  return (
    <div className="px-6 pt-2 pb-6 bg-stone-50">
      {/* Notificación superior */}
      <CartNotice tourName={tourName} />

      {/* Contenido principal en dos columnas */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* Detalles de compra: 3/5 */}
        <div className="w-full md:w-3/5">
          <ShoppingDetails />
        </div>

        {/* Formulario de pago: 2/5 */}
        <div className="w-full md:w-2/5">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
