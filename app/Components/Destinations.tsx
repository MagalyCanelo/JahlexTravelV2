import cusco from "@/public/cusco.jpg";
import ib from "@/public/islas_ballestas.jpg";
import paracas from "@/public/paracas2.jpg";
import ica from "@/public/huacachina.jpg";
import cañete from "@/public/cañete.jpg";
import nazca from "@/public/nazca2.jpg";
import Image from "next/image";

const destinations = [
  {
    title: "Paracas",
    location: "Perú",
    image: paracas,
  },
  {
    title: "Ica",
    location: "Perú",
    image: ica,
  },
  {
    title: "Nazca",
    location: "Perú",
    image: nazca,
  },
  {
    title: "Cañete",
    location: "Perú",
    image: cañete,
  },
  {
    title: "Cuzco",
    location: "Perú",
    image: cusco,
  },
];

const Destinations = () => {
  return (
    <div className="p-4 lg:p-6 bg-stone-50">
      <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow mt-2 mb-4">
        <h2 className="text-md font-semibold">Destinos</h2>
      </div>

      <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-1 lg:mx-0">
        <div className="col-span-1 relative rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition aspect-[5/4] lg:aspect-[3/4] mb-4 lg:mb-0">
          <Image
            src={destinations[0].image}
            alt={destinations[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 transition " />
          <div className="absolute bottom-2 left-2 z-10 bg-[rgba(75,131,0,0.8)] px-2 py-1 rounded-md flex flex-col space-y-0.5 text-white">
            <h3 className="text-sm font-semibold">{destinations[0].title}</h3>
            <p className="text-xs">{destinations[0].location}</p>
          </div>
        </div>

        <div className="col-span-2 grid md:grid-cols-2 grid-cols-1 gap-4">
          {destinations.slice(1, 5).map((dest) => (
            <div
              key={dest.title}
              className="relative rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition aspect-[5/4] lg:aspect-[4.65/3]"
            >
              <Image
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 transition" />
              <div className="absolute bottom-2 left-2 z-10 bg-[rgba(75,131,0,0.8)] px-2 py-1 rounded-md flex flex-col space-y-0.1">
                <h3 className="text-sm text-white font-semibold text-c drop-shadow-sm">
                  {dest.title}
                </h3>
                <p className="text-xs text-white drop-shadow-sm">
                  {dest.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
