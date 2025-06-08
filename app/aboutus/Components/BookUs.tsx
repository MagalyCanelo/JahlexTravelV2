import {
  FaCertificate,
  FaShoppingCart,
  FaUserTie,
  FaClock,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";

const BookUs = () => {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        ¿Por qué reservar con nosotros?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: (
              <FaShoppingCart className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />
            ),
            title: "Paquetes Personalizados",
            text: "Diseñamos paquetes de viaje a medida, exclusivos y personalizados, ajustados a tus gustos y necesidades.",
          },
          {
            icon: (
              <FaHandsHelping className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />
            ),
            title: "Compromiso con el Cliente",
            text: "Trabajamos siempre de la mano con nuestros clientes para asegurarnos de que cada detalle de su viaje sea memorable.",
          },
          {
            icon: <FaUserTie className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />,
            title: "Tours Guiados por Expertos",
            text: "Nuestro equipo de guías locales te mostrará lo mejor de Perú con un enfoque único y lleno de conocimiento.",
          },
          {
            icon: <FaClock className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />,
            title: "Atención 24/7",
            text: "Nuestro equipo está disponible 24/7 para ofrecerte apoyo constante y que tu viaje sea placentero.",
          },

          {
            icon: <FaLeaf className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />,
            title: "Turismo Sostenible y Responsable",
            text: "Nos comprometemos con la preservación del medio ambiente y nuestros recursos naturales y culturales.",
          },
          {
            icon: <FaCertificate className="oliva-c w-8 h-8 xl:w-10 xl:h-10" />,
            title: "Certificación y Seguridad",
            text: "Somos una agencia certificada, y garantizamos tu seguridad con los mejores protocolos en todos nuestros viajes.",
          },
        ].map(({ icon, title, text }, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 py-5 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center pb-1">{icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              {title}
            </h4>
            <p className="text-sm text-gray-600 text-center">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookUs;
