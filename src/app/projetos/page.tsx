"use client";

import { useState, useEffect } from "react";
import Grid from "../components/Grid";
import TitleBar from "../components/TitleBar";
import HeaderWithSidebar from "../components/HeaderWithSidebar";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import ProjectModal from "@/app/components/ProjectModal";
import { funcionarios } from "../data/funcionarios";
import EmptyState from "../components/EmptyState";

export default function Projetos() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projetos, setProjetos] = useState<
    { id: string; title: string; members: string[]; tarefas?: any[] }[]
  >([]);
  const [carregado, setCarregado] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem("projetos");
    if (saved) {
      try {
        setProjetos(JSON.parse(saved));
      } catch (err) {
        console.error("Erro ao ler projetos do localStorage:", err);
      }
    }
    setCarregado(true);
  }, []);


  useEffect(() => {
    if (carregado) {
      localStorage.setItem("projetos", JSON.stringify(projetos));
    }
  }, [projetos, carregado]);

  const handleSalvarProjeto = (projectData: {
    name: string;
    description: string;
    deadline: string;
    employees: number[];
    file: File | null;
  }) => {
    const novoProjeto = {
      id: Math.random().toString(36).substr(2, 9),
      title: projectData.name,
      members: projectData.employees.map((id) => {
        const funcionario = funcionarios.find((f) => f.id === id);
        return funcionario?.avatarUrl ?? "/default-icon.svg";
      }),
      tarefas: [],
    };

    setProjetos((prev) => [...prev, novoProjeto]);
  };

  return (
    <HeaderWithSidebar>
      <TitleBar
        name="Paula"
        role="Gerente de projetos"
        subtitle="Área de projetos"
        rightContent={
          <Button
            variant="primary"
            icon={<FaPlus />}
            onClick={() => setIsProjectModalOpen(true)}
          >
            Criar Projeto
          </Button>
        }
      />

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onSave={handleSalvarProjeto}
      />

      <h2 className="mb-7 text-black text-xl font-bold">
        Acessados Recentemente
      </h2>

      {projetos.length === 0 ? (
        <EmptyState
          title="Nenhum projeto encontrado 😕"
          description={
            <>
              Clique em{" "}
              <span className="font-bold text-yellow-500">"Criar Projeto"</span>{" "}
              para adicionar o primeiro.
            </>
          }
        />
      ) : (
        <Grid columns={3}>
          {projetos.map((projeto) => (
            <Link
              key={projeto.id}
              href={`/projetos/${projeto.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProjectCard title={projeto.title} members={projeto.members} />
            </Link>
          ))}
        </Grid>
      )}
    </HeaderWithSidebar>
  );
}
