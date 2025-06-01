"use client";

function ActionButton(props: {
  onClick?: () => void;
  tipo: "primary" | "secondary";
  title: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className={
        props.tipo === "primary"
          ? "bg-lime-600 text-white px-4 py-[6px] rounded-full bg-oliva-o-hover transition"
          : "flex items-center bg-[#cbf199] text-black px-4 py-[6px] rounded-full hover:bg-[#b9e185] transition"
      }
    >
      {props.title}
    </button>
  );
}

export default ActionButton;
