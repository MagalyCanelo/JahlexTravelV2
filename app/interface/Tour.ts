export interface BaseTour {
  id: number;
  title: string;
  priceRegular: number;
  priceOffer: number;
  duration: string;
  activityLevel: ActivityLevel;
  groupSize: GroupSize;
  schedule: string[]; // Ej: ["8:00", "10:00"]
  availableDates: string[]; // Formato ISO (YYYY-MM-DD)
  images: string[];
  description: string;
  itinerary: string[];
  includes: string[];
  notIncluded: string[];
  recommendations: string[];
  category: TourCategory;
  location: string;
  rating: number;
  minAge: number;
}

export enum TourCategory {
  AVENTURA = "Aventura",
  CULTURAL = "Cultural",
  NATURALEZA = "Naturaleza",
  MARITIMO = "Marítimo",
}

export enum ActivityLevel {
  BAJO = "Bajo",
  MODERADO = "Moderado",
  ALTO = "Alto",
}

export enum GroupSize {
  PEQUEÑO = "Pequeño",
  MEDIANO = "Mediano",
  GRANDE = "Grande",
}

export interface ShoppingCarTour {
  tours: BaseTourExtended[];
}

export interface BaseTourExtended extends BaseTour {
  addedAt: string;
  date: string;
  quantity: number;
  hour: string;
  price: number;
}
