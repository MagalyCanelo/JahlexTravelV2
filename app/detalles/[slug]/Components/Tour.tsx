
import TourImage from "./TourImage";
import TourDetails from "./TourDetails";
import TourTabsSection from "./TourTabsSection";
import HelpCard from "./HelpCard";
import WhyUsCard from "./WhyUsCard";
import { getUserShoppingCar } from "@/service/FirebaseService";

function Tour() {

  return (
    <>
      <div className="bg-gray-50 flex flex-col lg:flex-row gap-6 px-6 py-3">
        <div className="w-full lg:w-3/5">
          <TourImage />
        </div>

        <div className="w-full lg:w-2/5">
          <TourDetails />
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col lg:flex-row gap-6 px-6 py-5">
        <div className="w-full lg:w-3/5">
          <TourTabsSection />
        </div>

        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <HelpCard tourTitle="Tour Islas Ballestas" />
          <WhyUsCard />
        </div>
      </div>
    </>
  );
}

export default Tour;
