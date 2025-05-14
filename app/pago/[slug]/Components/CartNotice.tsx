import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const CartNotice = ({ tourName }: { tourName: string }) => {
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-xs px-4 py-2 flex items-center justify-between gap-6 relative overflow-hidden mb-4">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-oliva-c rounded-t-xl" />

      {/* Icono + Mensaje */}
      <div className="flex items-center gap-2">
        <FaCheckCircle className="w-7 h-7 lg:w-4 lg:h-4 xl:w-5 xl:h-5 oliva-c" />
        <p className="text-xs xl:text-sm text-gray-700 leading-snug">
          El tour
          <span className="text-oliva-o font-semibold"> “{tourName}”</span> se
          ha añadido exitosamente a tu carrito.
        </p>
      </div>

      {/* Botón */}
      <Link
        href="/carrito/uiddelusuario"
        className="text-center ml-4 my-1 bg-[#E6F0AC] text-black text-xs xl:text-sm font-medium px-3 py-[6px] rounded-lg hover:bg-[#d7e99c] transition-colors duration-200"
      >
        Ver carrito
      </Link>
    </div>
  );
};

export default CartNotice;
