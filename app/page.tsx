import Image from "next/image";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import { ToursList } from "./Components/ToursList";
import { infoTours } from "./data/infoTours";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ToursList tours={infoTours} />
      <Footer />
    </>
  );
}
