import {
  LuBadgePercent,
  LuCircleCheck,
  LuBookOpenCheck,
  LuHeadset,
} from "react-icons/lu";
import ib from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";

export default function WhyChooseUs() {
  return (
    <section className="pt-4 pb-32 bg-gray-50 flex flex-col md:flex-row items-center justify-center gap-10 px-6">
      {/* Imágenes */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="relative z-10 w-60 h-80 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={ib.src} // Cambia por tu imagen
            alt="Ciudad"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-16 top-32 w-64 h-96 rounded-2xl overflow-hidden shadow-lg z-20 border-4 border-white">
          <img
            src={rnp.src} // Cambia por tu imagen
            alt="Paisaje"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Why <span className="text-green-500">Choose</span> Us ?
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet Mauris purus auctor pulvinar integer nam
          turpis. Pretium pellentesque scelerisque massa etiam.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <LuBadgePercent className="text-yellow-500 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">
                Best Price Guarantee
              </h4>
              <p className="text-sm text-gray-600">
                Exclusive deals & discounts.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <LuCircleCheck className="text-blue-500 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">Verified Reviews</h4>
              <p className="text-sm text-gray-600">
                Trusted ratings from real guests.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <LuBookOpenCheck className="text-indigo-500 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">Seamless Booking</h4>
              <p className="text-sm text-gray-600">
                Fast, secure, and hassle-free reservations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
            <LuHeadset className="text-purple-500 w-6 h-6" />
            <div>
              <h4 className="font-semibold text-gray-800">
                24/7 Customer Support
              </h4>
              <p className="text-sm text-gray-600">
                Assistance anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
