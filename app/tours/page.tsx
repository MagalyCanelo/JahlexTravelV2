import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { infoTours } from "../data/infoTours";
import { BaseTour } from "../interface/Tour";
import ListaTours from "./Components/ListaTours";

function page() {
  const tours: BaseTour[] = infoTours;
  return (
    <>
      <Header />
      <ListaTours listaTours={tours} />
      <Footer />
    </>
  );
}

export default page;
