"use client";
import React from "react";

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
          ? "bg-oliva-c text-white px-5 py-2 rounded-full bg-oliva-o-hover transition"
          : "flex items-center bg-[#E6F0AC] text-black px-5 py-2 rounded-full hover:bg-[#d7e99c] transition"
      }
    >
      {props.title}
    </button>
  );
}

export default ActionButton;
