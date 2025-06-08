"use client";
import { TourCard } from "@/app/Components/TourCard";
import { infoTours } from "@/app/data/infoTours";
import { useKeenSlider } from "keen-slider/react";
import HelpCard from "./HelpCard";
import TourDetails from "./TourDetails";
import TourImage from "./TourImage";
import TourTabsSection from "./TourTabsSection";
import WhyUsCard from "./WhyUsCard";
import { KeenSliderInstance } from "keen-slider";
import { FaStar } from "react-icons/fa";
import Coment from "./Coment";
import { useEffect, useState } from "react";
import {
  addTourComment,
  getAllTourComments,
  getOneTour,
  getTourComments,
  getUserPurchases,
} from "@/service/FirebaseService";
import { BaseTour, TourReview } from "@/app/interface/Tour";
import ActionButton from "@/app/Components/ActionButton";
import { useUserStore } from "@/app/store/Usuario";
import Image from "next/image";

function Tour(props: { tourid: string }) {
  const user = useUserStore();
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
    created(s: KeenSliderInstance) {
      setInterval(() => {
        s.next();
      }, 1500);
    },
  });

  const [comments, setComments] = useState<TourReview[]>([]);
  const [canComment, setCanComment] = useState(false);
  const [dataTour, setDataTour] = useState<BaseTour>();
  const [qualification, setQualification] = useState(0);

  /*   useEffect(() => {
    getTourComments(props.tourid).then((v) => setComments(v || []));
  }, [props.tourid]); */

  useEffect(() => {
    Promise.all([
      getOneTour(props.tourid),
      getUserPurchases(user.user.email!),
      getAllTourComments(props.tourid),
    ]).then(([tourData, purchases, comments]) => {
      setDataTour(tourData!);
      console.log(purchases);
      setCanComment((purchases?.length ?? 0) >= 1);
      setComments(comments);
    });
  }, []);

  return (
    <>
      <div className="bg-stone-50 flex flex-col lg:flex-row gap-6 px-6 py-3 pb-8">
        <div className="w-full lg:w-3/5">
          {dataTour && <TourImage {...dataTour} />}
        </div>

        <div className="w-full lg:w-2/5">
          {dataTour && <TourDetails {...dataTour} />}
        </div>
      </div>

      <section className="bg-stone-50 px-4 pb-8">
        <section className="bg-stone-50 flex flex-col lg:flex-row gap-6 px-2 py-5">
          <div className="w-full lg:w-3/5">
            <TourTabsSection />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            <HelpCard tourTitle="Tour Islas Ballestas" />
            <WhyUsCard />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 text-black gap-4 px-16">
          <div className=" flex flex-row gap-4 lg:w-3/6 h-fit mx-auto bg-white items-center justify-start p-8 broder-2 shadow rounded-lg">
            <h2 className="text-4xl font-bold">
              {(isNaN(
                comments.reduce((acc, cur) => acc + cur.qualification, 0) /
                  comments.length
              )
                ? 0
                : comments.reduce((acc, cur) => acc + cur.qualification, 0) /
                  comments.length
              ).toFixed(1)}
            </h2>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={24}
                    className={
                      i <
                      comments.reduce(
                        (acc, cur) => acc + cur.qualification,
                        0
                      ) /
                        comments.length
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p>{comments.length} opiniones</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            {canComment && (
              <form
                action={async (formData: FormData) => {
                  addTourComment(
                    {
                      createdAt: new Date().toISOString(),
                      image: user.user.image ?? "/default-avatar.png",
                      username: user.user.name ?? "Anonymous",
                      opinion: formData.get("opinion")?.toString() ?? "",
                      qualification: qualification,
                    },
                    props.tourid
                  ).then((v) => alert("Completado"));
                }}
                className="bg-white text-black mb-8 flex flex-col gap-4 w-full p-8 shadow-md rounded-lg"
              >
                <div className="flex flex-row gap-4 ">
                  <Image
                    src={user.user.image ?? "/default-avatar.png"}
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="rounded-full h-fit"
                  />
                  <div className="w-full flex flex-col gap-2 ">
                    <div className="flex flex-row gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={24}
                          onClick={() => setQualification(i + 1)}
                          className={`cursor-pointer transition-colors duration-300 ${i < 0 ? "text-yellow-400" : "text-gray-300"}`}
                          fill={i < qualification ? "#facc15" : "#d1d5db"}
                        />
                      ))}
                    </div>
                    <textarea
                      name="opinion"
                      id="opinion"
                      className="p-2 rounded-lg w-full outline-none border-stone-500 border"
                      rows={5}
                      placeholder="Una excelente experiencia . . . "
                    ></textarea>
                    <div className="flex flex-row w-full items-center justify-end">
                      <ActionButton
                        type="submit"
                        title="Enviar comentarios"
                        tipo="primary"
                      />
                    </div>
                  </div>
                </div>
              </form>
            )}
            {comments.length < 1 ? (
              <p className="text-black text-2xl ">No hay comentarios aún</p>
            ) : (
              comments.map((v) => {
                return <Coment {...v} key={v.username} />;
              })
            )}
          </div>
        </section>
        <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow my-4">
          <h2 className="text-md font-semibold">Más destinos</h2>
        </div>
        <section ref={sliderRef} className="keen-slider w-full bg-stone-50">
          {infoTours.map((logo, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <TourCard tour={logo} isStatic={true} />
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export default Tour;
