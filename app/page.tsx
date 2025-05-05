import Image from "next/image";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import { ToursList } from "./Components/ToursList";
import { infoTours } from "./data/infoTours";
import Destinations from "./Components/Destinations";
import Authorizations from "./Components/Authorizations";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Destinations />
      <ToursList tours={infoTours} />
      <Authorizations />
      <Footer />
    </>
  );
}
