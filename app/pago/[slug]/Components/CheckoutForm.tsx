"use client"
import { createPurchase } from "@/service/FirebaseService";
import InfoFields from "./InfoFields";
import PaymentMethod from "./PaymentMethod";
import { useUserStore } from "@/app/store/Usuario";

const CheckoutForm = () => {
  const user=useUserStore();
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      createPurchase(user.user.email!, data).then(
        v=>alert("Comprado")
      );
    }} className="bg-white text-black p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Información del contacto</h2>
      <InfoFields />
      <p className="mt-4 font-medium xl:text-[16px]">
        Monto a pagar: <span className="oliva-o font-bold">$0.00</span>
      </p>
      <PaymentMethod />
      <button
        type="submit"
        className="mt-4 w-full bg-oliva-c bg-oliva-o-hover text-white py-2 rounded font-semibold"
      >
        Completar mi pedido
      </button>
    </form>
  );
};

export default CheckoutForm;
