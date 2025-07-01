"use client";
import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";

interface Task {
  id?: number;
  title: string;
  description: string;
  status?: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  statusColor?: string;
}

const TaskColumn = ({ title, tasks, statusColor = "bg-gray-300" }: TaskColumnProps) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (task: Task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="bg-white rounded-2xl p-10 w-auto shadow-lg h-fit max-h-4/5 overflow-x-auto">
      {/* Título com ícones de status */}
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <h2 className="font-normal text-black text-[1.5rem]">{title}</h2>
          <div className="flex -space-x-2">
            <div className={`w-8 h-8 rounded-full border bg-gray-300`} />
            <div className="w-8 h-8 rounded-full border bg-gray-300" />
            <div className="w-8 h-8 rounded-full border bg-gray-300" />
          </div>
        </div>
        {/* Linha amarela embaixo do título */}
        <div className={`w-full h-[3px] ${statusColor} mt-2 mb-6`} />
      </div>

      {/* Lista de tarefas */}
      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <div key={index} onClick={() => handleCardClick(task)} style={{ cursor: "pointer" }}>
            <TaskCard
              title={task.title}
              description={task.description}
              statusColor={statusColor}
            />
          </div>
        ))}
      </div>
      <TaskModal open={modalOpen} onClose={handleCloseModal} task={selectedTask}  />
    </div>
  );
};

export default TaskColumn;

