"use client";
import { TourReview } from "@/app/interface/Tour";
import { useUserStore } from "@/app/store/Usuario";
import { useToursStore } from "@/app/store/ToursStore";
import { getUserComments } from "@/service/FirebaseService";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TourCard } from "@/app/Components/TourCard";

export default function CommentList() {
  const user = useUserStore();
  const { tours } = useToursStore();
  const [reviews, setReviews] = useState<TourReview[]>([
    {
      opinion: "Great tour!",
      qualification: 5,
      image:
        "https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png",
      username: "John Doe",
      createdAt: new Date().getUTCDate().toLocaleString(),
    },
    {
      opinion: "Amazing experience",
      qualification: 4,
      image:
        "https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png",
      username: "Jane Smith",
      createdAt: new Date().getUTCDate().toLocaleString(),
    },
  ]);

  /* useEffect(() => {
    if (user.user.id !== "" && user.user.id) {
      getUserComments(user.user.id).then((tr) => setReviews(tr));
    }
  }, [user.user.id]); */

  return (
    <div className="text-black">
      {/* Franja superior */}
      <div className="bg-oliva-c py-2 mx-8 mt-2 rounded-xl shadow-md">
        <h1 className="text-center text-white text-3xl font-bold hero-banner-title tracking-wide">
          Mis Reseñas
        </h1>
      </div>

      {/* Contenido */}
      <div className="flex flex-row gap-8 p-6">
        {/* Tours column */}
        <section className="w-1/2">
          {tours.map((v) => (
            <TourCard key={v.id} tour={v} isStatic />
          ))}
        </section>

        {/* Reviews column */}
        <div className="w-1/2">
          <section className="flex flex-col gap-4">
            {reviews?.map((tr, index) => (
              <section
                key={index}
                className="flex flex-row gap-2 border border-stone-200 shadow p-4 rounded-lg"
              >
                <Image
                  src={tr.image}
                  alt="User avatar"
                  width={1080}
                  height={1080}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col justify-center items-start">
                  <p className="font-semibold">{tr.username}</p>
                  <div className="flex flex-row gap-1 my-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={`star-${i}`}
                        className={
                          i + 1 <= tr.qualification
                            ? "text-[#F7D547]"
                            : "text-[#919191]"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{tr.opinion}</p>
                  <p className="text-sm text-gray-500 mt-2">{tr.createdAt}</p>
                </div>
              </section>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
