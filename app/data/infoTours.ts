import { BaseTour, TourCategory, ActivityLevel, GroupSize } from "../interface/Tour";
import islas_ballestas from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";
import cusco from "@/public/cusco.jpg";


export const infoTours: BaseTour[] = [
  {
    id: 1,
    title: "Islas Ballestas",
    priceRegular: 40,
    priceOffer: 35,
    duration: "2 horas",
    activityLevel: ActivityLevel.BAJO,
    groupSize: GroupSize.MEDIANO,
    schedule: ["8:00", "10:00"],
    availableDates: ["2025-05-10", "2025-05-11"],
    images: [islas_ballestas.src, rnp.src],
    description: "Un recorrido marítimo por las islas Ballestas.",
    itinerary: [
      "Salida desde el puerto",
      "Visita a formaciones rocosas",
      "Avistamiento de fauna marina"
    ],
    includes: ["Guía", "Chaleco salvavidas", "Transporte en bote"],
    notIncluded: ["Comidas", "Entrada a la reserva"],
    recommendations: ["Llevar bloqueador solar", "Traer cámara", "Ropa ligera"],
    category: TourCategory.MARITIMO,
    location: "Paracas - Perú",
    rating: 4.5
  },
  {
    id: 2,
    title: "Tour Reserva Nacional de Paracas",
    priceRegular: 50,
    priceOffer: 45,
    duration: "4 horas",
    activityLevel: ActivityLevel.MODERADO,
    groupSize: GroupSize.GRANDE,
    schedule: ["11:00", "15:00"],
    availableDates: ["2025-05-12", "2025-05-13"],
    images: [cusco.src,],
    description: "Descubre la belleza natural de la reserva de Paracas.",
    itinerary: [
      "Centro de interpretación",
      "Mirador de la Catedral",
      "Playa rnp"
    ],
    includes: ["Transporte", "Guía", "Entradas"],
    notIncluded: ["Comidas"],
    recommendations: ["Llevar agua", "Sombrero", "Bloqueador"],
    category: TourCategory.NATURALEZA,
    location: "Paracas - Perú",
    rating: 4.7
  }
];
