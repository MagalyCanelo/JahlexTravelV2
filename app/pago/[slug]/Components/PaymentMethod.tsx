import izipay from "@/public/izipay.png"
import Image from "next/image";


const PaymentMethod = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Método de pago</h2>
        <button className="text-gray-800 px-4 py-2 rounded font-semibold hover:bg-[#fefefe] w-full shadow-sm flex flex-row items-center justify-center">
          <Image src={izipay.src} width={125} height={105} alt="Logo de IziPay" />
          </button>
        <label className="block mt-4">
          <input type="checkbox" required /> Acepto los términos y condiciones
        </label>
    </div>
  );
};

export default PaymentMethod;
