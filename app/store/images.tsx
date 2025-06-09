import perfil_cristo from "@/public/Hero/perfil_cristo.jpg";
import colibri from "@/public/Hero/colibri.jpg";
import cañete from "@/public/Hero/cañete.jpg";
import huacachina from "@/public/Hero/huacachina.jpg";
import machu_picchu from "@/public/Hero/machu_picchu.jpg";
import lancha from "@/public/Hero/lancha.jpg";
import acueductos from "@/public/Hero/acueductos.jpg";
import montaña7colores from "@/public/Hero/montaña7colores.jpg";
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
      src: lancha,
      title: "Islas Ballestas",
      location: "Paracas - Perú",
    },
    {
      src: perfil_cristo,
      title: "Islas Ballestas",
      location: "Paracas - Perú",
    },
    {
      src: huacachina,
      title: "Huacachina",
      location: "Ica - Perú",
    },
    {
      src: colibri,
      title: "Líneas de Nasca",
      location: "Nasca - Perú",
    },
    {
      src: acueductos,
      title: "Acueductos",
      location: "Cañete - Perú",
    },
    {
      src: cañete,
      title: "Cañete",
      location: "Cañete - Perú",
    },
    {
      src: machu_picchu,
      title: "Machu Picchu",
      location: "Cusco - Perú",
    },
    {
      src: montaña7colores,
      title: "Montaña de 7 Colores",
      location: "Cusco - Perú",
    },
  ],
  isLoading: false,
  error: null,
  fetchImages: () => {
    set({ isLoading: false, error: null });
  },
}));
