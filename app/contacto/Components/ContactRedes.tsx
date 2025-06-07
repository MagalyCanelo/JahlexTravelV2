import { FaFacebookF, FaTiktok, FaTripadvisor } from "react-icons/fa";
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full p-4 lg:p-6">
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
  );
};

export default ContactSection;
