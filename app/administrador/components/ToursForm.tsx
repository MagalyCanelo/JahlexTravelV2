"use client";

import { db } from "@/app/config/config";
import {
  ActivityLevel,
  BaseTour,
  GroupSize,
  TourCategory,
} from "@/app/interface/Tour";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

interface ToursFormProps {
  func: "agregar" | "editar";
  tourId?: string; // Parámetro adicional para la edición
}

function ToursForm({ func, tourId }: ToursFormProps) {
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

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar los cambios en los campos tipo array
  const handleArrayChange = (name: keyof BaseTour, value: string) => {
    setFormData({
      ...formData,
      [name]: value.split(",").map((item) => item.trim()),
    });
  };

  // Función para enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      `${func === "editar" ? "Editando" : "Agregando"} tour:`,
      formData
    );

    if (func === "agregar") {
      const newTourRef = doc(db, "tours", formData.title);

      // Validamos los datos antes de enviarlos
      const validatedData = {
        ...formData,
        id: Number(formData.id),
        priceRegular: Number(formData.priceRegular),
        priceOffer: Number(formData.priceOffer),
        rating: Number(formData.rating),
        minAge: Number(formData.minAge),
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

      // Guardamos el nuevo tour
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

    if (func === "editar" && tourId) {
      const tourRef = doc(db, "tours", tourId);

      // Validamos los datos antes de enviarlos
      const validatedData = {
        ...formData,
        id: Number(formData.id),
        priceRegular: Number(formData.priceRegular),
        priceOffer: Number(formData.priceOffer),
        rating: Number(formData.rating),
        minAge: Number(formData.minAge),
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

      // Actualizamos el tour
      setDoc(tourRef, validatedData, { merge: true })
        .then(() => {
          alert("Tour editado exitosamente");
        })
        .catch((error) => {
          console.error("Error al editar el tour:", error);
        });
    }
  };

  // Cargar los datos del tour si estamos en modo "editar"
  useEffect(() => {
    if (func === "editar" && tourId) {
      const fetchTour = async () => {
        const tourRef = doc(db, "tours", tourId);
        const tourSnap = await getDoc(tourRef);
        if (tourSnap.exists()) {
          setFormData(tourSnap.data() as BaseTour);
        } else {
          console.error("Tour no encontrado");
        }
        setIsLoading(false);
      };

      fetchTour();
    } else {
      setIsLoading(false); // Si estamos en "agregar", no cargamos datos previos
    }
  }, [func, tourId]);

  // Estilos para los campos de formulario
  const inputClass =
    "pl-5 pr-2 py-2 border border-gray-300 rounded w-full text-gray-600 text-md bg-white focus:outline-none focus:ring-2 focus:ring-oliva-o";
  const labelClass = "text-gray-700 font-medium mb-2";

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 p-6 rounded-lg shadow-md bg-white"
    >
      {/* Título */}
      <div className="flex flex-col">
        <label htmlFor="title" className={labelClass}>
          Título
        </label>
        {func === "editar" ? (
          <input
            className={inputClass}
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            disabled
          />
        ) : (
          <input
            className={inputClass}
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Nombre del Tour"
          />
        )}
      </div>

      {/* Precio Regular */}
      <div className="flex flex-col">
        <label htmlFor="priceRegular" className={labelClass}>
          Precio Regular
        </label>
        <input
          className={inputClass}
          type="number"
          id="priceRegular"
          name="priceRegular"
          value={formData.priceRegular}
          onChange={handleChange}
          placeholder="Precio regular"
        />
      </div>

      {/* Precio Oferta */}
      <div className="flex flex-col">
        <label htmlFor="priceOffer" className={labelClass}>
          Precio Oferta
        </label>
        <input
          className={inputClass}
          type="number"
          id="priceOffer"
          name="priceOffer"
          value={formData.priceOffer}
          onChange={handleChange}
          placeholder="Precio de oferta"
        />
      </div>

      {/* Duración */}
      <div className="flex flex-col">
        <label htmlFor="duration" className={labelClass}>
          Duración en minutos
        </label>
        <input
          className={inputClass}
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duración del tour"
        />
      </div>

      {/* Nivel de Actividad */}
      <div className="flex flex-col">
        <label htmlFor="activityLevel" className={labelClass}>
          Nivel de Actividad
        </label>
        <select
          className={inputClass}
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

      {/* Tamaño del Grupo */}
      <div className="flex flex-col">
        <label htmlFor="groupSize" className={labelClass}>
          Tamaño del Grupo
        </label>
        <select
          className={inputClass}
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

      {/* Descripción */}
      <div className="flex flex-col col-span-2">
        <label htmlFor="description" className={labelClass}>
          Descripción
        </label>
        <textarea
          className={inputClass}
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción del tour"
          rows={4}
        />
      </div>

      {/* Botón de Enviar */}
      <div className="col-span-2 flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {func === "agregar" ? "Agregar Tour" : "Editar Tour"}
        </button>
      </div>
    </form>
  );
}

export default ToursForm;
