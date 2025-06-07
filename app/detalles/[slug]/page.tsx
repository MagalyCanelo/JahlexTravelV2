"use client";
import { useParams } from "next/navigation";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Tour from "./Components/Tour";

function page() {
  const path = useParams();
  return (
    <>
      <Header />
      <Tour tourid={decodeURIComponent(path.slug?.toString() || '')}/>
      <Footer />
    </>
  );
}

export default page;
