import { SocialLink } from "@/app/Components/TopBar";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaTripadvisor,
} from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex justify-center gap-4 text-green-800 text-lg">
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
  );
};

export default ContactSection;
