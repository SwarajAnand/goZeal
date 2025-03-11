import React from "react";
import { ButtonProps } from "../Interfaces/Buttons.type";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "primary",
  size = "medium",
  borderRadius = "8px",
  fontColor = "white",
  style = {},
}) => {

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${type === "primary" ? "bg-[#7F7FE9]" : "bg-gray-300 text-black"
        } ${sizeClasses[size]} transition duration-300 hover:opacity-80 cursor-pointer`}
      style={{ borderRadius, color: fontColor, ...style }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
