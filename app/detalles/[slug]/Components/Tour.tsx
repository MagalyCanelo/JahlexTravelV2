"use client";
import TourImage from "./TourImage";
import TourDetails from "./TourDetails";
import TourTabsSection from "./TourTabsSection";
import HelpCard from "./HelpCard";
import WhyUsCard from "./WhyUsCard";
import { getUserShoppingCar } from "@/service/FirebaseService";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useToursStore } from "@/app/store/ToursStore";
import { infoTours } from "@/app/data/infoTours";
import { TourCard } from "@/app/Components/TourCard";

function Tour() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    created(s: any) {
      setInterval(() => {
        s.next();
      }, 1500);
    },
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col lg:flex-row gap-6 px-6 py-3 pb-8">
        <div className="w-full lg:w-3/5">
          <TourImage />
        </div>

        <div className="w-full lg:w-2/5">
          <TourDetails />
        </div>
      </div>

      <div className="bg-stone-50 px-4 pb-8">
        <div className="bg-gray-50 flex flex-col lg:flex-row gap-6 px-6 py-5">
          <div className="w-full lg:w-3/5">
            <TourTabsSection />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            <HelpCard tourTitle="Tour Islas Ballestas" />
            <WhyUsCard />
          </div>
        </div>
        <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow my-4">
          <h2 className="text-md font-semibold">Más destinos</h2>
        </div>
        <div ref={sliderRef} className="keen-slider w-full bg-stone-50">
          {infoTours.map((logo, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <TourCard tour={logo} isStatic={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tour;
