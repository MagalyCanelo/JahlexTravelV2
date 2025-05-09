"use client";

import {
  ActivityLevel,
  BaseTour,
  GroupSize,
  TourCategory,
} from "@/app/interface/Tour";
import React, { useState } from "react";

function TurForm() {
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
    // Aquí puedes enviar el formulario a una API o backend
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 p-4 rounded-lg shadow"
    >
      <div className=" flex flex-col">
        <label htmlFor="title">Título</label>
        <input
          className="border border-gray-300 rounded p-2"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="priceRegular">Precio Regular</label>
        <input
          type="number"
          id="priceRegular"
          name="priceRegular"
          value={formData.priceRegular}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="priceOffer">Precio Oferta</label>
        <input
          type="number"
          id="priceOffer"
          name="priceOffer"
          value={formData.priceOffer}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="duration">Duración</label>
        <input
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="activityLevel">Nivel de Actividad</label>
        <select
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

      <div>
        <label htmlFor="groupSize">Tamaño del Grupo</label>
        <select
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

      <div>
        <label htmlFor="schedule">Horarios (separados por coma)</label>
        <input
          id="schedule"
          value={formData.schedule.join(", ")}
          onChange={(e) => handleArrayChange("schedule", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="availableDates">
          Fechas Disponibles (YYYY-MM-DD, separadas por coma)
        </label>
        <input
          id="availableDates"
          value={formData.availableDates.join(", ")}
          onChange={(e) => handleArrayChange("availableDates", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="images">URLs de Imágenes (separadas por coma)</label>
        <input
          id="images"
          value={formData.images.join(", ")}
          onChange={(e) => handleArrayChange("images", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="itinerary">Itinerario (separado por coma)</label>
        <input
          id="itinerary"
          value={formData.itinerary.join(", ")}
          onChange={(e) => handleArrayChange("itinerary", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="includes">Incluye (separado por coma)</label>
        <input
          id="includes"
          value={formData.includes.join(", ")}
          onChange={(e) => handleArrayChange("includes", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="notIncluded">No Incluye (separado por coma)</label>
        <input
          id="notIncluded"
          value={formData.notIncluded.join(", ")}
          onChange={(e) => handleArrayChange("notIncluded", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="recommendations">
          Recomendaciones (separado por coma)
        </label>
        <input
          id="recommendations"
          value={formData.recommendations.join(", ")}
          onChange={(e) => handleArrayChange("recommendations", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select
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

      <div>
        <label htmlFor="location">Ubicación</label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="rating">Puntaje (1-5)</label>
        <input
          type="number"
          id="rating"
          name="rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Agregar Sitio Turístico</button>
    </form>
  );
}

export default TurForm;
