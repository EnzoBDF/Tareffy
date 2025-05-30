import Image from "next/image";

interface ProjectCardProps {
  title: string;
  members: string[]; // array com URLs das imagens dos membros
  extraCount?: number; // quantos membros extras (+4, etc)
  color?: string; // cor do lado direito
}

const ProjectCard = ({
  title,
  members,
  extraCount,
  color = "bg-blue-400",
}: ProjectCardProps) => {
  return (
    <div className="flex rounded-lg overflow-hidden shadow-md w-[260px] h-[120px]">
      
      <div className="bg-[#1f1f1f] text-white flex-1 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex items-center -space-x-2">
          {members.slice(0, 3).map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Member ${index + 1}`}
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
          ))}
          {extraCount && (
            <div className="w-8 h-8 rounded-full border-2 border-white bg-black text-white text-xs flex items-center justify-center font-bold">
              +{extraCount}
            </div>
          )}
        </div>
      </div>

      <div className={`w-14 ${color}`} />
    </div>
  );
};

export default ProjectCard;
