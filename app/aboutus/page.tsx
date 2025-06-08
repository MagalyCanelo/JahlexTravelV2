import Authorizations from "../Components/Authorizations";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import WhoWeAre from "./Components/WhoWeAre";

function page() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <Authorizations />
      <Footer />
    </>
  );
}

export default page;
