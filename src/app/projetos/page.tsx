"use client"

import Grid from "../components/Grid"
import TitleBar from "../components/TitleBar"
import HeaderWithSidebar from "../components/HeaderWithSidebar"
import ProjectCard from "../components/ProjectCard"
import Link from "next/link"
import Button from "../components/Button"
import { FaPlus } from "react-icons/fa"
import ProjectModal from "@/app/components/ProjectModal";
import { useState } from "react"

export default function Projetos() {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);


    const projetos = [
        { id: 1, title: "Projeto #1", members: ["/public/icon1.svg", "/public/icon2.svg"] },
        { id: 2, title: "Projeto #2", members: ["/public/icon3.svg", "/public/icon4.svg"] },
    ];

    return (
        <HeaderWithSidebar>
            <TitleBar name="Paula" role="Gerente de projetos" subtitle="Área de projetos" rightContent={
                <Button variant="primary" icon={<FaPlus />} onClick={() => setIsProjectModalOpen(true)}>
                    Criar Projeto
                </Button>
            } />
            <ProjectModal
                isOpen={isProjectModalOpen}
                onClose={() => setIsProjectModalOpen(false)}
                onSave={(projectData) => {

                    console.log(projectData);
                }}
            />
            <h2 className="mb-7 text-black text-xl font-bold">Acessados Recentemente</h2>
            <Grid columns={3}>
                {projetos.map((projeto) => (
                    <Link key={projeto.id} href={`/projetos/${projeto.id}`} style={{ textDecoration: 'none' }}>
                        <ProjectCard title={projeto.title} members={projeto.members} />
                    </Link>
                ))}
            </Grid>
        </HeaderWithSidebar>
    )
}