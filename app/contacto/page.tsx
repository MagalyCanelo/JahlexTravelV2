import React from "react";
import Header from "../Components/Header";
import ContactSection from "./Components/ContactSection";
import GoogleMaps from "./Components/GoogleMaps";
import Footer from "../Components/Footer";
import ContactRedes from "./Components/ContactRedes";

function page() {
  return (
    <div>
      <Header className="bg-oliva-c text-black" />
      <ContactRedes />
      <ContactSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
}

export default page;
