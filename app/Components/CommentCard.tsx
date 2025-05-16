"use client";

import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface User {
  name: { first: string; last: string };
  picture: { large: string };
  rating: number;
}

interface CommentCardProps {
  user: User;
  comentario: string;
  ubicacion?: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  user,
  comentario,
  ubicacion = "",
}) => {
  const { name, picture, rating } = user;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.3 && rating - fullStars <= 0.7;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-[#F7D547]" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-[#F7D547]" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-[#F7D547]" />);
    }
    return stars;
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-xl shadow-md p-6 h-full text-left max-w-full w-full">
      <div className="flex gap-1 text-lg mb-4">{renderStars()}</div>
      <p className="text-base text-gray-800 mb-6 leading-relaxed">
        “{comentario}”
      </p>
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
        <Image
          src={picture.large}
          alt={`${name.first} ${name.last}`}
          width={50}
          height={50}
          className="rounded-full object-cover w-12 h-12"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            {name.first} {name.last}
          </h3>
          <p className="text-sm text-gray-500">{ubicacion}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
