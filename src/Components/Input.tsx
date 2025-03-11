import React from "react";
import { InputProps } from "../Interfaces/Input.type";

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
  size = "medium",
  borderRadius = "8px",
  fullWidth = false
}) => {

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg"
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 
        ${sizeClasses[size]} ${fullWidth ? "w-full" : "w-auto"} transition duration-300`}
      style={{ borderRadius }}
    />
  );
};

export default Input;
