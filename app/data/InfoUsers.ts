import cusco from "@/public/cusco.jpg";
import islas_ballestas from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";

const infoUsers = [
  {
    name: { first: "Ana", last: "Pérez" },
    picture: { large: islas_ballestas.src },
    location: "Lima, Perú",
    comment: "Una experiencia maravillosa, todo muy bien organizado.",
    rating: 5,
  },
  {
    name: { first: "Carlos", last: "Ramírez" },
    picture: { large: rnp.src },
    location: "Cusco, Perú",
    comment: "Muy recomendable, aunque el guía llegó un poco tarde.",
    rating: 4.5,
  },
  {
    name: { first: "Lucía", last: "Fernández" },
    picture: { large: cusco.src },
    location: "Arequipa, Perú",
    comment: "El tour fue bueno, pero esperaba un poco más.",
    rating: 3.3,
  },
  {
    name: { first: "Lucía", last: "Fernández" },
    picture: { large: cusco.src },
    location: "Arequipa, Perú",
    comment: "El tour fue bueno, pero esperaba un poco más.",
    rating: 3.3,
  },
];

export default infoUsers;
