import { create } from "zustand";
import { BaseTour, BaseTourExtended, ShoppingCarTour } from "../interface/Tour";

interface ToursStore {
  tours: BaseTour[];
  selectedTour: BaseTour | null;
  setSelectedTour: (tour: BaseTour) => void;
  setTours: (tours: BaseTour[]) => void;
  addTour: (tour: BaseTour) => void;
  clearTours: () => void;
}

export const useToursStore = create<ToursStore>((set) => ({
  tours: [],
  selectedTour: null,
  setTours: (tours) => set({ tours }),
  setSelectedTour: (tour) => set({ selectedTour: tour }),
  addTour: (tour) => set((state) => ({ tours: [...state.tours, tour] })),
  clearTours: () => set({ tours: [] }),
}));

interface BaseTourExtendedStore extends ShoppingCarTour {
  setTours: (tours: BaseTourExtended[]) => void;
}

export const useShoppingCar = create<BaseTourExtendedStore>((set) => ({
  tours: [],
  setTours: (tours: BaseTourExtended[]) => set({ tours }),
}));
