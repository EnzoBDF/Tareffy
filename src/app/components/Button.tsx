"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "circle" |"noBg";
  className?: string;
  disabled?: boolean;
}

export default function Button({ children, icon, onClick, type = "button", variant = "primary", className = "", disabled = false }: ButtonProps) {
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md px-5 py-2 rounded-md",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black font-semibold shadow-md px-5 py-2 rounded-md",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    noBg:"bg-transparent hover:text-red-500 text-black font-semibold",
    circle:"bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md px-2 py-0.4 rounded-full"
  };

  const variantClass = variants[variant];

  return (
    <button type={type} onClick={onClick} className={`flex items-center gap-2 ${variantClass} ${className}`} disabled={disabled}>
      <span>{children}</span>
      {icon && <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full text-sm">{icon}</span>}
    </button>
  );
}
