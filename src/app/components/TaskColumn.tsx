import TaskCard from "./TaskCard";

interface TaskColumnProps {
  title: string;
  tasks: { title: string; description: string }[];
  statusColor?: string;
}

const TaskColumn = ({ title, tasks, statusColor = "bg-gray-300" }: TaskColumnProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 w-72 shadow-lg">
      {/* Título com ícones de status */}
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-black text-sm">{title}</h2>
          <div className="flex -space-x-2">
            <div className={`w-4 h-4 rounded-full border ${statusColor}`} />
            <div className="w-4 h-4 rounded-full border bg-gray-300" />
            <div className="w-4 h-4 rounded-full border bg-gray-300" />
          </div>
        </div>
        {/* Linha amarela embaixo do título */}
        <div className="w-full h-[2px] bg-yellow-400 mt-2" />
      </div>

      {/* Lista de tarefas */}
      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            statusColor={statusColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
