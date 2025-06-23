import Button from '../components/Button';
import { FaPlus, FaMinus } from "react-icons/fa";




interface TitleBarProps {
  role?: string;
  name: string;
  subtitle?: string;
  showButtons?: boolean;
}

export default function TitleBar({ role, name, subtitle, showButtons = false }: TitleBarProps) {
  return (
    <div className="mt-10 mb-8 w-[79.167vw] h-[13.5vh] bg-[#2C2C32] p-[1vw] rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-[2.25rem] font-regular text-white">
          Olá {role && <span className="capitalize">{role}</span>} <span className="font-bold">{name}</span>!
        </h2>
        {subtitle && (
          <p className="font-bold text-white mt-[0.5vh] ml-[0.2vw] text-[1rem]">{subtitle}</p>
        )}
      </div>

      {showButtons && (
        <div className="flex gap-4">
         <Button icon={<FaPlus />}>Cadastrar produto</Button>
         <Button icon={<FaMinus />}>Excluir produto</Button>
        </div>
      )}
    </div>
  );
}
