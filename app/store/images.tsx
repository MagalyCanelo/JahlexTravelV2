import islas from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";
import huacachina from "@/public/huacachina.jpg";
import cusco from "@/public/cusco.jpg";
import { create } from "zustand";

interface Image {
  src: any; // or StaticImageData if you're using Next.js
  title: string;
  location: string;
}

interface ImageStore {
  images: Image[];
  isLoading: boolean;
  error: string | null;
  fetchImages: () => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  images: [
    {
      src: islas,
      title: "Islas Ballestas",
      location: "Paracas - Perú",
    },
    {
      src: rnp,
      title: "Playa rnp",
      location: "Paracas - Perú",
    },
    {
      src: huacachina,
      title: "Huacachina",
      location: "Ica - Perú",
    },
    {
      src: cusco,
      title: "Cusco",
      location: "Cusco - Perú",
    },
  ],
  isLoading: false,
  error: null,
  fetchImages: () => {
    set({ isLoading: false, error: null });
  },
}));
