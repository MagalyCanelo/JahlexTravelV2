"use client";
import { createPurchase, getUserShoppingCar } from "@/service/FirebaseService";
import InfoFields from "./InfoFields";
import PaymentMethod from "./PaymentMethod";
import { useUserStore } from "@/app/store/Usuario";
import { ShoppingCarTour } from "@/app/interface/Tour";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CheckoutForm = () => {
  const { user } = useUserStore();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [userData, setUserData] = useState<{
    nombres: string;
    apellidos: string;
    correo: string;
    prefijo: string;
    celular: number;
  }>({
    nombres: "",
    apellidos: "",
    correo: "",
    prefijo: "",
    celular: 0,
  });

  const [userShoppingCar, setUserShoppingCar] =
    useState<ShoppingCarTour | null>(null);
  useEffect(() => {
    getUserShoppingCar(user.id!).then((v) => {
      console.log(v);
      setUserShoppingCar(v);
    });
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    // Validar que userShoppingCar no sea null y que sea un array de tours
    if (!userShoppingCar || !Array.isArray(userShoppingCar.tours)) {
      setLoading(false);
      return;
    }

    const exito = await createPurchase(
      user.id!,
      userShoppingCar.tours,
      (userShoppingCar?.tours ?? []).reduce(
        (acc, tour) => acc + tour.price * tour.quantity,
        0
      ) * 1.18,
      userData
    );
    setLoading(false);
    if (exito) {
      alert("Compra realizada correctamente");
      router.push("/");
    } else {
      alert("Error al realizar la compra");
    }
  };
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Información del contacto</h2>
      <InfoFields setLoading={setLoading} setUserData={setUserData} />
      <p className="mt-4 font-medium xl:text-[16px]">
        Monto a pagar:{" "}
        <span className="oliva-o font-bold">
          PEN{" "}
          {(
            (userShoppingCar?.tours ?? []).reduce(
              (acc, tour) => acc + tour.price * tour.quantity,
              0
            ) * 1.18
          ).toFixed(2)}
        </span>
      </p>
      <PaymentMethod />
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-4 ">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-oliva-o"></div>
          <span className="text-oliva-o font-semibold">
            Rellene los datos de contacto para completar su pedido
          </span>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          type="button"
          className="mt-4 w-full bg-oliva-c bg-oliva-o-hover text-white py-2 rounded font-semibold"
        >
          Completar mi pedido
        </button>
      )}
    </div>
  );
};

export default CheckoutForm;
