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
      <div className="bg-[#efeded] rounded-xl px-4 py-4 w-[20rem] flex justify-between items-start shadow-md mt-2 transition-all duration-200 cursor-pointer hover:shadow-lg hover:scale-[1.03]">
        <div>
          <h3 className="text-[1.3rem] font-normal text-black">
            {title}
            <div className={`w-[120%] h-[3px] ${statusColor} mt-1`}/>
          </h3>
          <p className="text-md mt-2 text-black">{description}</p>
        </div>
  
        <div
          className={`w-10 h-10 rounded-full border border-black bg-[#D9D9D9] `}
        />
      </div>
    );
  };
  
  export default TaskCard;
  