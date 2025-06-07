import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { SocialLink } from "./TopBar";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#FDFFF7] border-t-8 border-[#588f10] text-gray-800 py-8 px-5 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-20 gap-8">
          {/* Logo y redes */}
          <div className="flex flex-col justify-center h-full max-md:border-b-2 max-md:pb-8 max-md:border-[#588f10] md:border-0 md:pb-0">
            <div className="flex items-center mb-4 justify-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/logo.png"
                  alt="Jahlex Logo"
                  className="w-65"
                  height={1080}
                  width={1080}
                />
                <p className="text-gray-600 text-center mt-2 text-sm">
                  <strong>RUC:</strong> 1234567890
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3 text-green-800 text-lg">
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=61576859812087"
                  icon={<FaFacebookF size={18} />}
                  label="Facebook"
                />
              </div>
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <SocialLink
                  href="https://www.instagram.com/jahlextravelperu?igsh=c2oydXd2aThmZzNr"
                  icon={<FaInstagram size={19} />}
                  label="Instagram"
                />
              </div>
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <SocialLink
                  href="https://www.tiktok.com/@jahlextraveladventure"
                  icon={<FaTiktok size={18} />}
                  label="TikTok"
                />
              </div>
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <SocialLink
                  href="https://wa.me/51947435368"
                  icon={<FaWhatsapp size={19} />}
                  label="WhatsApp"
                />
              </div>
              <div className="bg-oliva-c bg-oliva-o-hover rounded-full p-3 text-white">
                <SocialLink
                  href="https://www.tripadvisor.com.pe/Attraction_Review-g445063-d33219851-Reviews-Jahlex_Travel_Adventure-Paracas_Ica_Region.html"
                  icon={<FaTripadvisor size={19} />}
                  label="Tripadvisor"
                />
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div className="lg:pl-5 pl-2 flex flex-col justify-center h-full max-md:border-b-2 max-md:pb-8 max-md:border-[#65830B] md:border-0 md:pb-0">
            <h3 className="font-semibold oliva mb-2">Enlaces</h3>
            <ul className="space-y-1 text-gray-600">
              <li>
                <Link href="/" className="oliva-o-hover font-medium">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="oliva-o-hover font-medium">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/tours" className="oliva-o-hover font-medium">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="oliva-o-hover font-medium">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinos */}
          <div className="lg:pl-5 pl-2 flex flex-col justify-center h-full max-md:border-b-2 max-md:pb-8 max-md:border-[#65830B] md:border-0 md:pb-0">
            <h3 className="font-semibold oliva mb-2">Destinos</h3>
            <ul className="space-y-1 text-gray-600">
              <li>
                <Link href="/" className="oliva-o-hover font-medium">
                  Tours en Paracas
                </Link>
              </li>
              <li>
                <Link href="/" className="oliva-o-hover font-medium">
                  Tours en Ica
                </Link>
              </li>
              <li>
                <Link href="/" className="oliva-o-hover font-medium">
                  Tours en Nazca
                </Link>
              </li>
              <li>
                <Link href="/" className="oliva-o-hover font-medium">
                  Tours en Cañete
                </Link>
              </li>
              <li>
                <Link href="/" className="oliva-o-hover font-medium">
                  Tours en Cuzco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="pl-2 flex flex-col justify-center h-full lg:pb-2">
            <h3 className="font-semibold mb-2">Contacto</h3>
            <div className="text-gray-600 space-y-2">
              <a
                href="https://maps.app.goo.gl/2JLeS4fC7jA5urn96"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-1.5"
              >
                <p>
                  <span className="font-medium">Dirección:</span> AA.HH. Alberto
                  Tataje Muñoz - Paracas
                </p>
              </a>
              <a href="mailto:jahlextravel@gmail.com" className="block mb-1.5">
                <p>
                  <span className="font-medium">Correo:</span>{" "}
                  jahlextravel@gmail.com
                </p>
              </a>
              <a href="tel:+51987654321" className="block">
                <p>
                  <span className="font-medium">Celular:</span> (+51) 987 654
                  321
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-oliva-o py-1.5 text-sm text-center xl:sm xl:py-2 text-white xl:text-sm">
        <p>
          © 2025 Jahlex Travel Adventure. All Rights Reserved.
          <span className="block sm:inline mt-1 sm:mt-0">
            Diseñado por Magaly Canelo
          </span>
        </p>
      </section>
    </>
  );
};

export default Footer;
