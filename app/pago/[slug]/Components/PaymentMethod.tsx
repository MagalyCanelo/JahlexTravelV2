import izipay from "@/public/izipay.png";
import Image from "next/image";

const PaymentMethod = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-3">Método de pago</h2>
      <button className="text-gray-700 px-4 py-2 rounded font-semibold hover:bg-[#fefefe] w-full shadow-sm flex flex-row items-center justify-center">
        <Image src={izipay.src} width={125} height={105} alt="Logo de IziPay" />
      </button>
      <label className="flex items-center mt-4 text-xs lg:text-[12.5px] xl:text-md gap-1">
        <input type="checkbox" required className="w-3 h-3 accent-gray-500" />
        <span>
          Declaro que he leído y aceptado los{" "}
          <a
            href="/terminos-y-condiciones"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-600 hover:text-gray-800"
          >
            términos y condiciones
          </a>
          .
        </span>
      </label>
    </div>
  );
};

export default PaymentMethod;
