"use client";

import { db } from "@/app/config/config";
import {
  ActivityLevel,
  BaseTour,
  GroupSize,
  TourCategory,
} from "@/app/interface/Tour";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

function TurForm(props: { func: "agregar" | "editar" }) {
  const [formData, setFormData] = useState<BaseTour>({
    id: 0,
    title: "",
    priceRegular: 0,
    priceOffer: 0,
    duration: "",
    activityLevel: ActivityLevel.BAJO,
    groupSize: GroupSize.MEDIANO,
    schedule: [],
    availableDates: [],
    images: [],
    description: "",
    itinerary: [],
    includes: [],
    notIncluded: [],
    recommendations: [],
    category: TourCategory.MARITIMO,
    location: "",
    rating: 0,
    minAge: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (name: keyof BaseTour, value: string) => {
    setFormData({
      ...formData,
      [name]: value.split(",").map((item) => item.trim()),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tour agregado:", formData);
    if (props.func === "agregar") {
      const newTourRef = doc(db, "tours", formData.title);
      // Validate data types before saving
      const validatedData = {
        ...formData,
        id: Number(formData.id),
        priceRegular: Number(formData.priceRegular),
        priceOffer: Number(formData.priceOffer),
        rating: Number(formData.rating),
        minAge: Number(formData.minAge),
        // Ensure arrays are arrays
        schedule: Array.isArray(formData.schedule) ? formData.schedule : [],
        availableDates: Array.isArray(formData.availableDates)
          ? formData.availableDates
          : [],
        images: Array.isArray(formData.images) ? formData.images : [],
        itinerary: Array.isArray(formData.itinerary) ? formData.itinerary : [],
        includes: Array.isArray(formData.includes) ? formData.includes : [],
        notIncluded: Array.isArray(formData.notIncluded)
          ? formData.notIncluded
          : [],
        recommendations: Array.isArray(formData.recommendations)
          ? formData.recommendations
          : [],
      };

      setDoc(newTourRef, validatedData)
        .then(() => {
          alert("Tour agregado exitosamente");
          setFormData({
            id: 0,
            title: "",
            priceRegular: 0,
            priceOffer: 0,
            duration: "",
            activityLevel: ActivityLevel.BAJO,
            groupSize: GroupSize.MEDIANO,
            schedule: [],
            availableDates: [],
            images: [],
            description: "",
            itinerary: [],
            includes: [],
            notIncluded: [],
            recommendations: [],
            category: TourCategory.MARITIMO,
            location: "",
            rating: 0,
            minAge: 0,
          });
        })
        .catch((error) => {
          console.error("Error al agregar el tour:", error);
        });
    }
    if (props.func === "editar") {
      const tourRef = doc(db, "tours", formData.title);
      // Create an object with only non-empty fields
      const updateData = Object.entries(formData).reduce(
        (acc, [key, value]) => {
          // Check if the value is not empty (considering arrays and strings)
          if (
            Array.isArray(value)
              ? value.length > 0
              : value !== "" && value !== 0
          ) {
            acc[key as keyof BaseTour] = value;
          }
          return acc;
        },
        {} as Partial<BaseTour>
      );

      updateDoc(tourRef, updateData)
        .then(() => {
          alert("Tour editado exitosamente");
          setFormData({
            id: 0,
            title: "",
            priceRegular: 0,
            priceOffer: 0,
            duration: "",
            activityLevel: ActivityLevel.BAJO,
            groupSize: GroupSize.MEDIANO,
            schedule: [],
            availableDates: [],
            images: [],
            description: "",
            itinerary: [],
            includes: [],
            notIncluded: [],
            recommendations: [],
            category: TourCategory.MARITIMO,
            location: "",
            rating: 0,
            minAge: 0,
          });
        })
        .catch((error) => {
          console.error("Error al editar el tour:", error);
        });
    }
  };

  const [tours, setTours] = useState<BaseTour[]>([]);
  useEffect(() => {
    const fetchTours = async () => {
      const tourRef = collection(db, "tours");
      const tourDocs = await getDocs(tourRef);
      const toursData: BaseTour[] = [];
      tourDocs.forEach((doc) => {
        toursData.push({ ...doc.data() } as BaseTour);
      });
      setTours(toursData);
    };

    fetchTours();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-3 bg-white col-span-10 row-span-8 my-auto gap-4 p-4 rounded-lg shadow"
    >
      <div className=" flex flex-col">
        <label htmlFor="title">Título</label>
        {props.func === "editar" ? (
          <select
            className="border border-gray-300 rounded p-2"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecciona un tour
            </option>
            {tours.map((tour) => (
              <option key={tour.title} value={tour.title}>
                {tour.title}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="border border-gray-300 rounded p-2"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        )}
      </div>

      <div className=" flex flex-col">
        <label htmlFor="priceRegular">Precio Regular</label>
        <input
          className="border border-gray-300 rounded p-2"
          type="number"
          id="priceRegular"
          name="priceRegular"
          value={formData.priceRegular}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="priceOffer">Precio Oferta</label>
        <input
          className="border border-gray-300 rounded p-2"
          type="number"
          id="priceOffer"
          name="priceOffer"
          value={formData.priceOffer}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="duration">Duración en minutos</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="activityLevel">Nivel de Actividad</label>
        <select
          className="border border-gray-300 rounded p-2"
          id="activityLevel"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
        >
          {Object.values(ActivityLevel).map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className=" flex flex-col">
        <label htmlFor="groupSize">Tamaño del Grupo</label>
        <select
          className="border border-gray-300 rounded p-2"
          id="groupSize"
          name="groupSize"
          value={formData.groupSize}
          onChange={handleChange}
        >
          {Object.values(GroupSize).map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className=" flex flex-col">
        <label htmlFor="schedule">Horarios (separados por coma)</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="schedule"
          value={formData.schedule.join(", ")}
          onChange={(e) => handleArrayChange("schedule", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="availableDates">
          Fechas Disponibles (YYYY-MM-DD, separadas por coma)
        </label>
        <input
          className="border border-gray-300 rounded p-2"
          id="availableDates"
          value={formData.availableDates.join(", ")}
          onChange={(e) => handleArrayChange("availableDates", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="images">URLs de Imágenes (separadas por coma)</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="images"
          value={formData.images.join(", ")}
          onChange={(e) => handleArrayChange("images", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="description">Descripción</label>
        <textarea
          className="border border-gray-300 rounded p-2"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="itinerary">Itinerario (separado por coma)</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="itinerary"
          value={formData.itinerary.join(", ")}
          onChange={(e) => handleArrayChange("itinerary", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="includes">Incluye (separado por coma)</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="includes"
          value={formData.includes.join(", ")}
          onChange={(e) => handleArrayChange("includes", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="notIncluded">No Incluye (separado por coma)</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="notIncluded"
          value={formData.notIncluded.join(", ")}
          onChange={(e) => handleArrayChange("notIncluded", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="recommendations">
          Recomendaciones (separado por coma)
        </label>
        <input
          className="border border-gray-300 rounded p-2"
          id="recommendations"
          value={formData.recommendations.join(", ")}
          onChange={(e) => handleArrayChange("recommendations", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="category">Categoría</label>
        <select
          className="border border-gray-300 rounded p-2"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {Object.values(TourCategory).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className=" flex flex-col">
        <label htmlFor="location">Ubicación</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col">
        <label htmlFor="rating">Puntaje (1-5)</label>
        <input
          className="border border-gray-300 rounded p-2"
          type="number"
          id="rating"
          name="rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-oliva-c text-white px-5 py-2 rounded-full bg-oliva-o-hover transition"
        type="submit"
      >
        Agregar Sitio Turístico
      </button>
    </form>
  );
}

export default TurForm;
