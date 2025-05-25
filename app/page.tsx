import infoUsers from "@/app/data/InfoUsers";
import Authorizations from "./Components/Authorizations";
import CommentList from "./Components/CommentList";
import Destinations from "./Components/Destinations";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import NewsletterSignup from "./Components/NewsletterSignup";
import Photos from "./Components/Photos";
import { ToursList } from "./Components/ToursList";
import WhyChooseUs from "./Components/WhyChooseUs";
import { infoTours } from "./data/infoTours";

export default function Home() {
  return (
    <>

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
