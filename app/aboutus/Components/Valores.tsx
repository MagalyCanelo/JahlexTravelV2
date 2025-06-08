import {
  FaRegLightbulb,
  FaHeart,
  FaUsers,
  FaBullhorn,
  FaUserShield,
  FaHandsHelping,
  FaHandshake,
} from "react-icons/fa";
import Authorizations from "@/app/Components/Authorizations"; // Asegúrate de que esta sea la ruta correcta

const Valores = () => {
  return (
    <>
      <div className="pt-3 pb-9 px-4 lg:px-6">
        {/* Título de la sección */}
        <div className="text-left mb-8">
          <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow">
            <h2 className="text-md font-semibold">Valores</h2>
          </div>
        </div>

        {/* Contenedor de los valores */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {
              icon: <FaUserShield className="text-pink-600 w-12 h-12" />,
              title: "Responsabilidad",
            },
            {
              icon: <FaRegLightbulb className="text-[#edae00] w-12 h-12" />,
              title: "Innovación",
            },
            {
              icon: <FaHandshake className="text-[#007dc5] w-12 h-12" />,
              title: "Respeto",
            },
            {
              icon: <FaHeart className="text-red-600 w-12 h-12" />,
              title: "Pasión",
            },
            {
              icon: <FaUsers className="text-teal-600 w-12 h-12" />,
              title: "Colaboración",
            },
            {
              icon: <FaBullhorn className="text-orange-600 w-12 h-12" />,
              title: "Comunicación",
            },
          ].map(({ icon, title }, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4">{icon}</div>
              <p className="font-semibold text-gray-800">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Authorizations />
      </div>
    </>
  );
};

export default Valores;
