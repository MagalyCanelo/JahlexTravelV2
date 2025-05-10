import islas_ballestas from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";
import cusco from "@/public/cusco.jpg";

const infoUsers = [
  {
    name: { first: "Ana", last: "Pérez" },
    picture: { large: islas_ballestas.src },
    rating: 5,
  },
  {
    name: { first: "Carlos", last: "Ramírez" },
    picture: { large: rnp.src },
    rating: 4.5,
  },
  {
    name: { first: "Lucía", last: "Fernández" },
    picture: { large: cusco.src },
    rating: 3.3,
  },
];

export default infoUsers;
