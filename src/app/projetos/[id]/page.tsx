"use client";

import { useEffect, useState } from "react";
import React from "react";
import HeaderWithSidebar from "../../components/HeaderWithSidebar";
import TitleBar from "../../components/TitleBar";
import TaskColumn from "../../components/TaskColumn";
import Button from "@/app/components/Button";
import { FaPlus } from "react-icons/fa";
import TaskModal from "@/app/components/TaskModal";

interface Tarefa {
  id?: number;
  title: string;
  description: string;
  status?: string;
  observations?: string;
  additionalInfo?: string;
}

interface Projeto {
  id: string;
  title: string;
  gerente?: string;
  members: string[];
  tarefas?: Tarefa[];
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Tarefa | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("projetos");
    if (saved) {
      const lista: Projeto[] = JSON.parse(saved);
      const encontrado = lista.find((p) => p.id === id);
      setProjeto(encontrado || null);
    }
  }, [id]);

  const handleOpenNewTaskModal = () => {
    setTaskToEdit({ title: "", description: "", status: "todo" });
    setIsTaskModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTaskModalOpen(false);
    setTaskToEdit(null);
  };

  const handleSaveTask = (task: Tarefa) => {
    if (!projeto) return;
    const updatedTarefas = [...(projeto.tarefas || []), task];
    const updatedProjeto = { ...projeto, tarefas: updatedTarefas };
    setProjeto(updatedProjeto);
    const saved = localStorage.getItem("projetos");
    if (saved) {
      const lista: Projeto[] = JSON.parse(saved);
      const idx = lista.findIndex((p) => p.id === projeto.id);
      if (idx !== -1) {
        lista[idx] = updatedProjeto;
        localStorage.setItem("projetos", JSON.stringify(lista));
      }
    }
    handleCloseModal();
  };

  if (!projeto) {
    return <div className="text-black p-10">Projeto não encontrado.</div>;
  }

  const tarefasTodo = projeto.tarefas?.filter((t) => t.status === "todo") || [];
  const tarefasDoing = projeto.tarefas?.filter((t) => t.status === "doing") || [];
  const tarefasDone = projeto.tarefas?.filter((t) => t.status === "done") || [];

  return (
    <HeaderWithSidebar>
      <TitleBar
        name={`Olá Gerente ${projeto.gerente || ""}`}
        rightContent={<Button variant="primary" icon={<FaPlus />} onClick={handleOpenNewTaskModal}>Criar Tarefa</Button>}
        subtitle={`Projeto #${projeto.id}`}
      />
      <div className="flex mt-8 justify-around justify-items-center">
        <TaskColumn title="A fazer" statusColor="bg-red-400" tasks={tarefasTodo} />
        <TaskColumn title="Em progresso" statusColor="bg-yellow-400" tasks={tarefasDoing} />
        <TaskColumn title="Concluído" statusColor="bg-green-400" tasks={tarefasDone} />
      </div>
      <TaskModal open={isTaskModalOpen} onClose={handleCloseModal} task={taskToEdit} onSave={handleSaveTask} />
    </HeaderWithSidebar>
  );
}
