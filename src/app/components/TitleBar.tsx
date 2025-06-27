import { ReactNode } from "react";

interface TitleBarProps {
  role?: string;
  name: string;
  subtitle?: string;
  rightContent?: ReactNode;
}

export default function TitleBar({ role, name, subtitle, rightContent }: TitleBarProps) {
  return (
    <div className="mt-8 mb-8 w-[79.167vw] h-[13.5vh] bg-[#2C2C32] p-[1vw] rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-[2.25rem] font-regular text-white">
          Olá {role && <span className="capitalize">{role}</span>} <span className="font-bold">{name}</span>!
        </h2>
        {subtitle && (
          <p className="font-bold text-white mt-[0.5vh] ml-[0.2vw] text-[1rem]">{subtitle}</p>
        )}
      </div>

      {rightContent && (
        <div className="flex gap-4">
          {rightContent}
        </div>
      )}
    </div>
  );
}
