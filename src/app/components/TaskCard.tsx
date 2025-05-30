interface TaskCardProps {
    title: string;
    description: string;
    statusColor?: string; // Ex: 'bg-gray-300'
  }
  
  const TaskCard = ({
    title,
    description,
    statusColor = "bg-gray-300",
  }: TaskCardProps) => {
    return (
      <div className="bg-[#efeded] rounded-xl p-4 w-[220px] shadow-sm flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-black">
            {title}
            <div className="w-14 h-[2px] bg-yellow-400 mt-1" />
          </h3>
          <p className="text-xs mt-2 text-black">{description}</p>
        </div>
  
        <div
          className={`w-6 h-6 rounded-full border border-black ${statusColor}`}
        />
      </div>
    );
  };
  
  export default TaskCard;
  