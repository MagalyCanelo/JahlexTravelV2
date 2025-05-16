"use client";
import { TourCard } from "@/app/Components/TourCard";
import { infoTours } from "@/app/data/infoTours";
import { useKeenSlider } from "keen-slider/react";
import HelpCard from "./HelpCard";
import TourDetails from "./TourDetails";
import TourImage from "./TourImage";
import TourTabsSection from "./TourTabsSection";
import WhyUsCard from "./WhyUsCard";

function Tour() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
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
