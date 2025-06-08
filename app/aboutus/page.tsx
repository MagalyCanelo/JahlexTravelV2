import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BookUs from "./Components/BookUs";
import MisionVision from "./Components/MisionVisin";
import Valores from "./Components/Valores";
import WhoWeAre from "./Components/WhoWeAre";

function page() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <MisionVision />
      <BookUs />
      <Valores />
      <Footer />
    </>
  );
}

export default page;
