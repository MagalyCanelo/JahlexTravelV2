import Image from "next/image";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import { ToursList } from "./Components/ToursList";
import { infoTours } from "./data/InfoTours";
import Destinations from "./Components/Destinations";
import Authorizations from "./Components/Authorizations";
import CommentList from "./Components/CommentList";
import infoUsers from "@/app/data/InfoUsers";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Destinations />
      <ToursList tours={infoTours} />
      <CommentList users={infoUsers} />
      <Authorizations />
      <Footer />
    </>
  );
}
