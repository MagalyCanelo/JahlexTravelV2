import Image from "next/image";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Footer from "./Components/Footer";
import { ToursList } from "./Components/ToursList";
import Destinations from "./Components/Destinations";
import Authorizations from "./Components/Authorizations";
import CommentList from "./Components/CommentList";
import infoUsers from "@/app/data/InfoUsers";
import { infoTours } from "./data/infoTours";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Destinations />
      <ToursList tours={infoTours} />
      <CommentList users={infoUsers} />
      <Authorizations />
      <Footer />
    </>
  );
}
