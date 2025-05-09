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
import WhyChooseUs from "./Components/WhyChooseUs";
import Photos from "./Components/Photos";
import NewsletterSignup from "./Components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Destinations />
      <ToursList tours={infoTours} />
      <WhyChooseUs />
      <Authorizations />
      <Photos />
      <CommentList users={infoUsers} />
      <NewsletterSignup />
      <Footer />
    </>
  );
}
