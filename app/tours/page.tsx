import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { infoTours } from "../data/infoTours";
import { BaseTour } from "../interface/Tour";
import ListaTours from "./Components/ListaTours";

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
