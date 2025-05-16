import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";

import type { ReactElement } from "react";

export default function TopBar(): ReactElement {
  return (
    <nav className="bg-oliva-o text-white text-xs xl:text-sm px-5 py-1.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Contacto a la izquierda */}
        <div className="flex items-center gap-4">
          {/* Teléfono */}
          <a
            href="tel:+51147852369"
            className="flex items-center gap-1.5 hover:text-gray-300 transition-colors border-r pr-4"
          >
            <FaPhoneAlt size={12} />
            <span>+51 147 852 369</span>
          </a>

          {/* Correo */}
          <a
            href="mailto:correo@gmail.com"
            className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
          >
            <FaEnvelope size={12} />
            <span>correo@gmail.com</span>
          </a>
        </div>

        {/* Idioma + Redes Sociales a la derecha */}
        <div className="flex items-center gap-2">
          {/* Selector de idioma */}
          <div className="flex items-center gap-1 pr-3 border-r">
            <FaGlobe size={14} />
            <select
              className="bg-transparent text-white text-xs px-1 py-0.5 rounded outline-none transition-colors"
              aria-label="Seleccionar idioma"
            >
              <option value="es" className="bg-white text-black">
                ES
              </option>
              <option value="en" className="bg-white text-black">
                EN
              </option>
            </select>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-3">
            <SocialLink
              href="https://facebook.com"
              icon={<FaFacebookF size={13} />}
              label="Facebook"
            />
            <SocialLink
              href="https://instagram.com"
              icon={<FaInstagram size={15} />}
              label="Instagram"
            />
            <SocialLink
              href="https://tiktok.com"
              icon={<FaTiktok size={13} />}
              label="TikTok"
            />
            <SocialLink
              href="https://wa.me/51999999999"
              icon={<FaWhatsapp size={15} />}
              label="WhatsApp"
            />
            <SocialLink
              href="https://tripadvisor.com"
              icon={<FaTripadvisor size={16} />}
              label="Tripadvisor"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Componente para íconos sociales
interface SocialLinkProps {
  href: string;
  icon: ReactElement;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps): ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-gray-300 transition-colors duration-200"
    >
      {icon}
    </a>
  );
}
