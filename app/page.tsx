"use client"
import { useEffect, useState } from "react";
import { getTours } from "@/service/FirebaseService";
import { BaseTour } from "@/app/interface/Tour";
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

export default function Home() {
  const [tours, setTours] = useState<BaseTour[]>([]);

  useEffect(() => {
    getTours().then((data) => {
      if (data) setTours(data);
    });
  }, []);

  return (
    <>

      <HeroBanner />
      <Destinations />
      <ToursList tours={tours} />
      <WhyChooseUs />
      <Authorizations />
      <Photos />
      <CommentList users={infoUsers} />
      <NewsletterSignup />
      <Footer />
    </>
  );
}
