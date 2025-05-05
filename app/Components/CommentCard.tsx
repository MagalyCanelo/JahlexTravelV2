interface CommentCardProps {
  imagen: string;
  nombre: string;
  comentario: string;
  rating: number;
}

const CommentCard: React.FC<CommentCardProps> = ({
  imagen,
  nombre,
  comentario,
  rating,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>{i < rating ? "★" : "☆"}</span>
  ));

  return (
    <div className="flex flex-col items-start justify-between bg-white shadow-lg max-w-full w-full h-50 p-4 rounded-lg font-nunito">
      <p className="text-sm text-black mb-2 break-words whitespace-normal overflow-hidden">
        {comentario}
      </p>
      <div className="flex flex-row items-center gap-4 h-fit mt-2">
        <img
          src={imagen}
          alt={nombre}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-md font-bold text-black">{nombre}</h2>
          <div className="text-[#F7D547] text-xl leading-none">{stars}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
