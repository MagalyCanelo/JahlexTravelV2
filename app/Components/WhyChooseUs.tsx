import {
  LuBadgePercent,
  LuCircleCheck,
  LuBookOpenCheck,
  LuHeadset,
} from "react-icons/lu";
import rnp from "@/public/rnp.jpg";
import ib from "@/public/islas_ballestas.jpg";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="pt-4 pb-32 bg-gray-50 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-10 px-6 place-items-start ">
      {/* Imágenes */}
      <div className="relative w-full mx-auto mt-16 md:w-1/2 flex justify-center items-center col-span-2">
        <Image
          src={rnp} // Cambia por tu imagen
          width={250}
          height={500}
          alt="Paisaje"
          className="w-48 lg:80 h-72 lg:h-96 object-cover rounded-lg border-2 border-white shadow-lg transition-transform transform hover:scale-105 absolute top-0 left-0"
        />
        <Image
          src={ib} // Cambia por tu imagen
          width={250}
          height={500}
          alt="Paisaje"
          className="w-48 lg:w-80 h-72 lg:h-96 object-cover rounded-lg border-2 border-white shadow-lg transition-transform transform hover:scale-105 absolute top-24 left-32"
        />
      </div>

      {/* Contenido */}
      <div className="lg:w-4/6  col-span-2 flex flex-col  ">
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
