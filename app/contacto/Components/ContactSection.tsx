import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row px-4 py-2 lg:py-4 lg:px-6 gap-10 max-w-screen-xl mx-auto bg-stone-50 min-h-screen">
      {/* ContactInfo ocupa 1/3 en pantallas grandes */}
      <div className="lg:w-1/3 w-full">
        <ContactInfo />
      </div>

      {/* ContactForm ocupa 2/3 en pantallas grandes */}
      <div className="lg:w-2/3 w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
