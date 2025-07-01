import React from "react";

interface EmployeeAvatarProps {
  name: string;
  avatar: string;
  ringColor: string;      // Ex: 'ring-yellow-400'
  labelBgColor: string;   // Ex: 'bg-yellow-400'
  onClick?: () => void;
  selected?: boolean;
}

const EmployeeAvatar: React.FC<EmployeeAvatarProps> = ({
  name,
  avatar,
  ringColor,
  labelBgColor,
  onClick,
  selected = false,
}) => (
  <div className="flex flex-col items-center" onClick={onClick}>
    {/* Avatar com borda */}
    <div className={`w-18 h-18 rounded-full border-4 ${ringColor} overflow-hidden`}>
      <img
        src={avatar}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Nome fora do círculo */}
    <div
      className={`mt-[-1rem] px-2 py-0.5 rounded ${labelBgColor} text-xs font-semibold text-black`}
    >
      {name}
    </div>
  </div>
);

export default EmployeeAvatar;
