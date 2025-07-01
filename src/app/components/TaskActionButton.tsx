import React from 'react';
import { FaClock } from 'react-icons/fa';


interface TaskActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export default function TaskActionButton({ icon, label, onClick }: TaskActionButtonProps) {
  return (
    <button
      className="bg-gray-100 rounded-lg h-[3.5rem] p-3  text-left text-sm flex items-center font-bold text-black gap-4 cursor-pointer   w-full hover:bg-gray-200 transition-colors hover:shadow-lg hover:scale-[1.07]"
      onClick={onClick}
      type="button"
    >
      {icon}
      {label}
    </button>
  );
}