import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-90 md:h-[500px] lg:h-[600px] overflow-hidden shadow-md p-4 lg:p-6 lg:pt-4">
      <iframe
        title="Ubicación en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.112834975654!2d-76.25013638907758!3d-13.832262477655028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x911063d4a7b180f7%3A0xaa75efb965756ca3!2sJahlex%20Travel%20Adventure!5e0!3m2!1sen!2pe!4v1749161563043!5m2!1sen!2pe"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
