import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, icon, onClick }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-md shadow-md flex items-center gap-2"
    >
      {children}
      {icon && (
        <div className="bg-[#FFFFFF] rounded-full flex items-center justify-center p-1">
            {icon}
        </div>
        )}
    </button>
  );
}