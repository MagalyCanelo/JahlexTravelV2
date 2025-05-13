import { FaFacebookF, FaTripadvisor, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#FDFFF7] border-t-8 border-[#65830B] text-gray-800 py-8 px-5 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-20 gap-8">
          {/* Logo y redes */}
          <div className="flex flex-col justify-center h-full max-md:border-b-2 max-md:pb-8 max-md:border-[#65830B] md:border-0 md:pb-0">
            <div className="flex items-center mb-4 justify-center">
              <div className="flex flex-col items-center">
                <img src="/logo.png" alt="Jahlex Logo" className="w-65" />
                <p className="text-gray-600 text-center mt-2 text-sm">
                  <strong>RUC:</strong> 1234567890
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-4 text-green-800 text-lg">
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <FaFacebookF />
              </div>
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <FaTripadvisor />
              </div>
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <FaTiktok />
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div className="lg:pl-5 pl-2 flex flex-col justify-center h-full max-md:border-b-2 max-md:pb-8 max-md:border-[#65830B] md:border-0 md:pb-0">
            <h3 className="font-semibold oliva mb-2">Enlaces</h3>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Destinos */}
          <div className="lg:pl-5 pl-2 flex flex-col justify-center h-full max-md:border-b-2 max-md:pb-8 max-md:border-[#65830B] md:border-0 md:pb-0">
            <h3 className="font-semibold oliva mb-2">Destinos</h3>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Tours en Paracas
                </a>
              </li>
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Tours en Ica
                </a>
              </li>
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Tours en Nazca
                </a>
              </li>
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Tours en Cañete
                </a>
              </li>
              <li>
                <a href="#" className="oliva-o-hover font-medium">
                  Tours en Cuzco
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="pl-2 flex flex-col justify-center h-full lg:pb-2">
            <h3 className="font-semibold mb-2">Contacto</h3>
            <div className="text-gray-600 space-y-2">
              <p>
                <strong>Dirección:</strong> Lorem
              </p>
              <p>
                <strong>Correo:</strong> xyz@gmail.com
              </p>
              <p>
                <strong>Celular:</strong> (+51) 987 654 321
              </p>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-oliva-o py-1.5 text-xs text-center xl:sm xl:py-2 text-white xl:text-sm">
        <p>
          © 2025 Jahlex Travel Adventure. All Rights Reserved.{" "}
          <span className="text-xs">Diseñado por Magaly Canelo</span>
        </p>
      </section>
    </>
  );
};

export default Footer;
