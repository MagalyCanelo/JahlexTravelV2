import islas from "@/public/islas_ballestas.jpg";
import roja from "@/public/roja.jpg";
import la_mina from "@/public/la_mina.jpg";
import huacachina from "@/public/huacachina.jpg";
import cusco from "@/public/cusco.jpg";
import { create } from "zustand";
import type { StaticImageData } from "next/image";

interface Image {
  src: StaticImageData;
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
      src: la_mina,
      title: "Playa La Mina",
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
