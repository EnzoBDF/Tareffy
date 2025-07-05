"use client";
import React, { useState, useEffect, use } from "react";
import HeaderWithSidebar from "../../components/HeaderWithSidebar";
import TitleBar from "../../components/TitleBar";
import TaskColumn from "../../components/TaskColumn";
import { title } from "process";
import Button from "@/app/components/Button";
import { FaPlug, FaPlus } from "react-icons/fa";
import TaskModal from "../../components/TaskModal";


const projetos = [
  {
    id: "1",
    title: "Projeto #1",
    gerente: "Paulo",
    members: ["/public/icon1.svg", "/public/icon2.svg"],
    tarefas: [
      { id: 1, title: "Tarefa 1.1", description: "Descrição 1.1", status: "todo" },
      { id: 2, title: "Tarefa 1.2", description: "Descrição 1.2", status: "doing" },
      { id: 3, title: "Tarefa 1.3", description: "Descrição 1.3", status: "done" },
    ],
  },
  {
    id: "2",
    title: "Projeto #2",
    gerente: "Paulo",
    members: ["/public/icon3.svg", "/public/icon4.svg"],
    tarefas: [
      { id: 1, title: "Tarefa 2.1", description: "Descrição 2.1", status: "todo" },
      { id: 2, title: "Tarefa 2.2", description: "Descrição 2.2", status: "doing" },
      { id: 3, title: "Tarefa 2.3", description: "Descrição 2.3", status: "done" },
    ],
  },
  {
    id: "3",
    title: "Projeto #3",
    gerente: "Ana",
    members: ["/public/icon5.svg"],
    tarefas: [
      { id: 1, title: "Tarefa 3.1", description: "Descrição 3.1", status: "todo" },
      { id: 2, title: "Tarefa 3.2", description: "Descrição 3.2", status: "doing" },
      { id: 3, title: "Tarefa 3.3", description: "Descrição 3.3", status: "done" },
    ],
  },
  {
    id: "4",
    title: "Projeto #4",
    gerente: "Ana",
    members: ["/public/icon1.svg"],
    tarefas: [
      { id: 1, title: "Tarefa 4.1", description: "Descrição 4.1", status: "todo" },
      { id: 2, title: "Tarefa 4.2", description: "Descrição 4.2", status: "doing" },
      { id: 3, title: "Tarefa 4.3", description: "Descrição 4.3", status: "done" },
    ],
  },
  {
    id: "5",
    title: "Projeto #5",
    gerente: "Carlos",
    members: ["/public/icon2.svg"],
    tarefas: [
      { id: 1, title: "Tarefa 5.1", description: "Descrição 5.1", status: "todo" },
      { id: 2, title: "Tarefa 5.2", description: "Descrição 5.2", status: "doing" },
      { id: 3, title: "Tarefa 5.3", description: "Descrição 5.3", status: "done" },
      {id: 4, title:"Tarefa 5.4", description: "Descrição 5.4", status: "doing"},
      {id: 5, title:"Tarefa 5.5", description: "Descrição 5.5", status: "doing"},
      {id: 6, title:"Tarefa 5.6", description: "Descrição 5.6", status: "doing"}
    ],
  },
  {
    id: "6",
    title: "Projeto #6",
    gerente: "Carlos",
    members: ["/public/icon3.svg"],
    tarefas: [
      { id: 1, title: "Tarefa 6.1", description: "Descrição 6.1", status: "todo" },
      { id: 2, title: "Tarefa 6.2", description: "Descrição 6.2", status: "doing" },
      { id: 3, title: "Tarefa 6.3", description: "Descrição 6.3", status: "done" },
    ],
  },
];

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);


  const projeto = projetos.find((p) => p.id === id) || projetos[0];

  const [tarefas, setTarefas] = useState(projeto.tarefas);
  useEffect(() => {
    const saved = localStorage.getItem(`tarefas_projeto_${id}`);
    if (saved) {
      try {
        setTarefas(JSON.parse(saved));
      } catch {}
    }
  }, [id]);


  useEffect(() => {
    localStorage.setItem(`tarefas_projeto_${id}`, JSON.stringify(tarefas));
  }, [tarefas, id]);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);


  const tarefasTodo = tarefas.filter((t) => t.status === "todo");
  const tarefasDoing = tarefas.filter((t) => t.status === "doing");
  const tarefasDone = tarefas.filter((t) => t.status === "done");


  const handleOpenCreateTask = () => {
    setTaskToEdit({ title: "", description: "", status: "todo" });
    setIsTaskModalOpen(true);
  };

  const handleSaveTask = (task) => {
    if (!task.id) {
      const newTask = { ...task, id: Date.now() };
      setTarefas((prev) => [newTask, ...prev]);
    } else {
      // Atualiza tarefa existente
      setTarefas((prev) => prev.map((t) => t.id === task.id ? { ...t, ...task } : t));
    }
    setIsTaskModalOpen(false);
    setTaskToEdit(null);
  };

  const handleDeleteTask = (task) => {
    setTarefas((prev) => prev.filter((t) => t.id !== task.id));
    setIsTaskModalOpen(false);
    setTaskToEdit(null);
  };


  const handleCloseModal = () => {
    setIsTaskModalOpen(false);
    setTaskToEdit(null);
  };

 
  const handleMoveStatus = (task, newStatus) => {
    setTarefas((prev) => prev.map((t) => t.id === task.id ? { ...t, status: newStatus } : t));
  };

  return (
    <HeaderWithSidebar>
      <TitleBar name={`Olá Gerente ${projeto.gerente}!`} role={projeto.title} rightContent={
        <Button variant="primary" icon={<FaPlus/>} onClick={handleOpenCreateTask}>Criar Tarefa</Button>
      } subtitle={`Projeto #${projeto.id}`} />
      <div className="flex  mt-8 justify-around justify-items-center">
        <TaskColumn title="A fazer" statusColor="bg-red-400" tasks={tarefasTodo} onDeleteTask={handleDeleteTask} onSaveTask={handleSaveTask} />
        <TaskColumn title="Em progresso" statusColor="bg-yellow-400" tasks={tarefasDoing} onDeleteTask={handleDeleteTask} onSaveTask={handleSaveTask} />
        <TaskColumn title="Concluído" statusColor="bg-green-400" tasks={tarefasDone} onDeleteTask={handleDeleteTask} onSaveTask={handleSaveTask} />
      </div>
      <TaskModal open={isTaskModalOpen} onClose={handleCloseModal} task={taskToEdit} onSave={handleSaveTask} onDelete={handleDeleteTask} onMoveStatus={handleMoveStatus} />
    </HeaderWithSidebar>
  );
}