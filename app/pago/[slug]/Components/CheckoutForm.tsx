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
    pais: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
  }>({
    nombres: "",
    apellidos: "",
    correo: "",
    prefijo: "",
    celular: 0,
    pais: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
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


    setLoading(false);

  };
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Información del contacto</h2>
      <InfoFields setLoading={setLoading} setUserData={setUserData} />
      <p className="mt-4 font-medium xl:text-[16px]">
        Monto a pagar:{" "}
        <span className="oliva-o font-bold">
          PEN{" "}
          {userShoppingCar?.tours
              .reduce((acc, tour) => acc + tour.price * tour.quantity, 0)
              .toFixed(2)}
        </span>
      </p>
      <PaymentMethod />

    </div>
  );
};

export default CheckoutForm;
