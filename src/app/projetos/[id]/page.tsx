"use client";

import { useEffect, useState } from "react";
import HeaderWithSidebar from "../../components/HeaderWithSidebar";
import TitleBar from "../../components/TitleBar";
import TaskColumn from "../../components/TaskColumn";
import Button from "@/app/components/Button";
import { FaPlus } from "react-icons/fa";

interface Tarefa {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface Projeto {
  id: string;
  title: string;
  gerente?: string;
  members: string[];
  tarefas?: Tarefa[];
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [projeto, setProjeto] = useState<Projeto | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("projetos");
    if (saved) {
      const lista: Projeto[] = JSON.parse(saved);
      const encontrado = lista.find((p) => p.id === id);
      setProjeto(encontrado || null);
    }
  }, [id]);

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
        rightContent={<Button variant="primary" icon={<FaPlus />}>Criar Tarefa</Button>}
        subtitle={`Projeto #${projeto.id}`}
      />
      <div className="flex mt-8 justify-around justify-items-center">
        <TaskColumn title="A fazer" statusColor="bg-red-400" tasks={tarefasTodo} />
        <TaskColumn title="Em progresso" statusColor="bg-yellow-400" tasks={tarefasDoing} />
        <TaskColumn title="Concluído" statusColor="bg-green-400" tasks={tarefasDone} />
      </div>
    </HeaderWithSidebar>
  );
}
