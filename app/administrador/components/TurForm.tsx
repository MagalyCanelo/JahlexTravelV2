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
    <div className="col-span-full mx-auto p-9 row-span-full h-[28rem] overflow-y-auto">
      <form onSubmit={handleSubmit} className="space-y-8 grid grid-cols-8 gap-6">
        {/* Información Básica */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Información Básica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2">
                Título del Tour
              </label>
              {props.func === "editar" ? (
                <select
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
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
                  className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Nombre del tour"
                />
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
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

            <div className="flex flex-col">
              <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2">
                Ubicación
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ciudad, región"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-2">
                Duración
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Ej: 4 horas, 1 día"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="rating" className="text-sm font-medium text-gray-700 mb-2">
                Puntaje (1-5)
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                type="number"
                id="rating"
                name="rating"
                step="0.1"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="minAge" className="text-sm font-medium text-gray-700 mb-2">
                Edad Mínima
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                type="number"
                id="minAge"
                name="minAge"
                value={formData.minAge}
                onChange={handleChange}
                placeholder="Años"
              />
            </div>
          </div>
        </div>

        {/* Precios */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Información de Precios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="priceRegular" className="text-sm font-medium text-gray-700 mb-2">
                Precio Regular (S/)
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                type="number"
                id="priceRegular"
                name="priceRegular"
                value={formData.priceRegular}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="priceOffer" className="text-sm font-medium text-gray-700 mb-2">
                Precio Oferta (S/)
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                type="number"
                id="priceOffer"
                name="priceOffer"
                value={formData.priceOffer}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        {/* Detalles del Tour */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Detalles del Tour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="activityLevel" className="text-sm font-medium text-gray-700 mb-2">
                Nivel de Actividad
              </label>
              <select
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
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

            <div className="flex flex-col">
              <label htmlFor="groupSize" className="text-sm font-medium text-gray-700 mb-2">
                Tamaño del Grupo
              </label>
              <select
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
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
          </div>

          <div className="mt-6">
            <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
              Descripción del Tour
            </label>
            <textarea
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent w-full"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe el tour, qué incluye, qué verán los turistas..."
            />
          </div>
        </div>

        {/* Horarios y Fechas */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Horarios y Disponibilidad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="schedule" className="text-sm font-medium text-gray-700 mb-2">
                Horarios Disponibles
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                id="schedule"
                value={formData.schedule.join(", ")}
                onChange={(e) => handleArrayChange("schedule", e.target.value)}
                placeholder="Ej: 8:00 AM, 2:00 PM"
              />
              <p className="text-xs text-gray-500 mt-1">Separar horarios con comas</p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="availableDates" className="text-sm font-medium text-gray-700 mb-2">
                Fechas Disponibles
              </label>
              <input
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                id="availableDates"
                value={formData.availableDates.join(", ")}
                onChange={(e) => handleArrayChange("availableDates", e.target.value)}
                placeholder="YYYY-MM-DD, YYYY-MM-DD"
              />
              <p className="text-xs text-gray-500 mt-1">Formato: YYYY-MM-DD, separar con comas</p>
            </div>
          </div>
        </div>

        {/* Imágenes */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Galería de Imágenes
          </h2>
          <div className="flex flex-col">
            <label htmlFor="images" className="text-sm font-medium text-gray-700 mb-2">
              URLs de Imágenes
            </label>
            <input
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
              id="images"
              value={formData.images.join(", ")}
              onChange={(e) => handleArrayChange("images", e.target.value)}
              placeholder="https://ejemplo.com/imagen1.jpg, https://ejemplo.com/imagen2.jpg"
            />
            <p className="text-xs text-gray-500 mt-1">Separar URLs con comas</p>
            {/* Previsualización de imágenes */}
            <div className="flex flex-wrap gap-3 mt-4">
              {formData.images.map((url, idx) =>
                url ? (
                  <div key={idx} className="w-24 h-24 border rounded overflow-hidden flex items-center justify-center bg-gray-50">
                    <img
                      src={url}
                      alt={`Imagen ${idx + 1}`}
                      className="object-cover w-full h-full"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        {/* Itinerario */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Itinerario
          </h2>
          <div className="flex flex-col">
            <label htmlFor="itinerary" className="text-sm font-medium text-gray-700 mb-2">
              Actividades del Itinerario
            </label>
            <textarea
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
              id="itinerary"
              value={formData.itinerary.join(", ")}
              onChange={(e) => handleArrayChange("itinerary", e.target.value)}
              rows={3}
              placeholder="8:00 AM - Recojo del hotel, 9:00 AM - Visita a sitio turístico..."
            />
            <p className="text-xs text-gray-500 mt-1">Separar actividades con comas</p>
          </div>
        </div>

        {/* Incluye y No Incluye */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Servicios Incluidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="includes" className="text-sm font-medium text-gray-700 mb-2">
                Incluye
              </label>
              <textarea
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                id="includes"
                value={formData.includes.join(", ")}
                onChange={(e) => handleArrayChange("includes", e.target.value)}
                rows={4}
                placeholder="Transporte, guía turístico, entradas..."
              />
              <p className="text-xs text-gray-500 mt-1">Separar servicios con comas</p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="notIncluded" className="text-sm font-medium text-gray-700 mb-2">
                No Incluye
              </label>
              <textarea
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
                id="notIncluded"
                value={formData.notIncluded.join(", ")}
                onChange={(e) => handleArrayChange("notIncluded", e.target.value)}
                rows={4}
                placeholder="Alimentación, bebidas, propinas..."
              />
              <p className="text-xs text-gray-500 mt-1">Separar servicios con comas</p>
            </div>
          </div>
        </div>

        {/* Recomendaciones */}
        <div className="bg-white rounded-lg shadow-md p-6 col-span-full ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Recomendaciones
          </h2>
          <div className="flex flex-col">
            <label htmlFor="recommendations" className="text-sm font-medium text-gray-700 mb-2">
              Recomendaciones para el Turista
            </label>
            <textarea
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-oliva-c focus:border-transparent"
              id="recommendations"
              value={formData.recommendations.join(", ")}
              onChange={(e) => handleArrayChange("recommendations", e.target.value)}
              rows={3}
              placeholder="Llevar protector solar, ropa cómoda, agua..."
            />
            <p className="text-xs text-gray-500 mt-1">Separar recomendaciones con comas</p>
          </div>
        </div>

        {/* Botón de Envío */}
        <div className="flex justify-center">
          <button
            className="bg-oliva-c text-white px-8 py-3 rounded-lg hover:bg-oliva-o-hover transition-colors duration-200 font-medium text-lg shadow-md"
            type="submit"
          >
            {props.func === "agregar" ? "Agregar Tour" : "Actualizar Tour"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TurForm;
