"use client";

function ActionButton(props: {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  tipo: "primary" | "secondary";
  title: string;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      disabled={props.disabled}
      className={`${props.className} ${
        props.tipo === "primary"
          ? "bg-lime-600 text-white px-4 py-[6px] rounded-full bg-oliva-o-hover transition"
          : "flex items-center bg-[#cbf199] text-black px-4 py-[6px] rounded-full hover:bg-[#b9e185] transition"
      } ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {props.title}
    </button>
  );
}

export default ActionButton;
