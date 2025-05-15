import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListaTours from "./Components/ListaTours";
import { BaseTour } from "../interface/Tour";
import { infoTours } from "../data/infoTours";

function page() {
  const tours: BaseTour[] = infoTours;
  return (
    <>
      <Header />
      <ListaTours listaTours={tours}/>
      <Footer />
    </>
  );
}

export default page;
