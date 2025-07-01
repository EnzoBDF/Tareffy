"use client";
import React from "react";
import TaskActionButton from "./TaskActionButton";
import { FaArchive, FaArrowRight, FaCheck, FaClipboardCheck, FaClipboardList, FaClock, FaConfluence, FaConnectdevelop, FaFile, FaFileArchive, FaFilePdf, FaGit, FaInfo, FaInfoCircle, FaLink, FaList, FaPencilAlt, FaPencilRuler, FaPersonBooth, FaPlus, FaRegFileArchive, FaTag, FaTrash, FaUserClock, FaUsers } from 'react-icons/fa';
interface Task {
  id?: number;
  title: string;
  description: string;
  status?: string;
  // Adicione outros campos conforme necessário
}

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
  task: Task | null;
}

const statusColors: Record<string, string> = {
  todo: "#A3A3A3",
  doing: "#F6B800",
  done: "#4CAF50",
};

export default function TaskModal({ open, onClose, task }: TaskModalProps) {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay de fundo */}
      <div
        className="fixed inset-0 bg-[#3333339a] z-40"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="bg-white rounded-lg w-[900px] max-w-full shadow-2xl relative flex flex-col z-50">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#1C1B1B] p-6 rounded-t-lg min-h-[70px]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-lg font-bold text-gray-500">+2</div>
            <div>
              <div className="text-xl font-semibold text-yellow-400 leading-tight">{task.title}</div>
              <div className="text-xs text-gray-300">funcionário</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="flex items-center gap-2 text-sm text-white font-semibold">
              <span className="w-4 h-4 rounded-full mb-1" style={{ background: statusColors[task.status || "doing"] }} />
              {task.status === "doing" ? "Em andamento" : task.status === "done" ? "Concluído" : "A fazer"}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-200">
              <span className="material-icons  mr-1 text-xl"><FaClock/></span>
              Sem data definida
            </span>
          </div>
        </div>

        {/* Adicionado em Projeto */}
        <div className="flex items-center gap-2 px-8 pt-4 pb-2">
          <span className="text-xs text-[#1C1B1B] font-semibold">Adicionado em</span>
          <span className="bg-[#D9D9D9] text-xs text-black px-2 py-0.5 rounded-full font-semibold flex items-center gap-4">
            Projeto <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
          </span>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-row px-12 pb- gap-8 mt-8">
          {/* Coluna esquerda */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Descrição */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-black font-bold text-lg">
                <FaFile className="text-2xl text-[#FFC116]"/>
                Descrição
              </div>
              <textarea
                className="w-full h-50 bg-[#D9D9D9] rounded-xl p-4 resize-none text-gray-700 text-base placeholder:text-black font-bold"
                placeholder="Adicione uma descrição sobre a tarefa..."
                value={task.description}
                readOnly
              />
            </div>
            {/* Observações */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-black font-bold text-lg">
                <FaClipboardList className="text-2xl text-[#FFC116]"/>
                Observações
              </div>
              <textarea
                className="w-full h-40  rounded-xl p-4 resize-none text-gray-700 text-base bg-[#D9D9D9] placeholder:text-black font-bold"
                placeholder="Adicione uma observação sobre a tarefa..."
                readOnly
              />
            </div>
            {/* Informações adicionais */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-black font-bold text-lg">
                <FaInfo className="text-2xl text-[#FFC116]"/>
                Informações adicionais
              </div>
              <textarea
                className="w-full h-40 bg-[#D9D9D9] rounded-xl p-4 resize-none text-gray-700 text-base placeholder:text-black font-bold"
                placeholder="Adicione uma observação sobre a tarefa..."
                readOnly
              />
            </div>
          </div>

          {/* Coluna direita - Ações */}
          <div className="w-52 flex flex-col gap-3  bg-[#D9D9D9] p-3 rounded-xl h-fit ml-8 mt-8">
            <div className="flex items-center gap-2 font-bold text-black text-lg">
              <FaPencilAlt/> Ações
            </div>
            <TaskActionButton icon={<FaClock className="text-2xl"/>} label="Adicione uma data" />
            <TaskActionButton icon={<FaUsers className="text-2xl"/>} label="Adicione um funcionário" />
            <TaskActionButton icon={<FaTag className="text-2xl"/>} label="Adicione uma etiqueta" />
            <TaskActionButton icon={<FaArchive className="text-2xl"/>} label="Arquive esta tarefa" />
            <TaskActionButton icon={<FaFileArchive className="text-2xl"/>} label="Anexar documento" />
            <TaskActionButton icon={<FaList className="text-2xl"/>} label="Histórico de atividades" />
            <TaskActionButton icon={<FaLink className="text-2xl"/>} label="Adicionar a um projeto" />
            <TaskActionButton icon={<FaArrowRight className="text-2xl"/>} label="Mover Tarefa" />
          </div>
        </div>

        {/* Rodapé */}
        <div className="flex items-center justify-end gap-4 px-12 pb-6">
          <button
            className="bg-[#E91414] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-base text-left cursor-pointer hover:bg-[#e91414af] transition duration-500"
            onClick={onClose}
          >
            <FaTrash/> Excluir <br /> tarefa
          </button>
          <button
            className="bg-[#83E56F] text-black px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-base h-18 hover:bg-[#83e56fc2] cursor-pointer transition duration-500 "
            onClick={onClose}
          >
            <span><FaCheck className="text-white"/></span>
          </button>
        </div>
      </div>
    </div>
  );
}
