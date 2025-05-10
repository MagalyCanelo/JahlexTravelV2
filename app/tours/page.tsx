import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListaTours from "./components/ListaTours";

function page() {
  return (
    <>
      <Header />
      <ListaTours />
      <Footer />
    </>
  );
}

export default page;
