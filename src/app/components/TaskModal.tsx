// TaskModal.tsx atualizado: sempre em modo edição ao abrir

"use client";
import React, { useState, useEffect } from "react";
import TaskActionButton from "./TaskActionButton";
import {
  FaArchive, FaArrowRight, FaCheck, FaClipboardList, FaClock,
  FaFile, FaFileArchive, FaInfo, FaLink, FaList, FaPencilAlt,
  FaTag, FaTrash, FaUsers
} from 'react-icons/fa';

interface Task {
  id?: number;
  title: string;
  description: string;
  observations?: string;
  additionalInfo?: string;
  status?: string;
}

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
  task: Task | null;
  onSave?: (task: Task) => void;
  onDelete?: (task: Task) => void;
  onMoveStatus?: (task: Task, newStatus: string) => void;
}

const statusColors: Record<string, string> = {
  todo: "#A3A3A3",
  doing: "#F6B800",
  done: "#4CAF50",
};

export default function TaskModal({
  open,
  onClose,
  task,
  onSave,
  onDelete,
  onMoveStatus
}: TaskModalProps) {
  if (!open || task === null) return null;

  const isDeleteEnabled = !!onDelete && !!task?.id;
  const isMoveEnabled = !!onMoveStatus;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [observations, setObservations] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [moveDropdownOpen, setMoveDropdownOpen] = useState(false);

  useEffect(() => {
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setObservations(task?.observations || "");
    setAdditionalInfo(task?.additionalInfo || "");
  }, [task]);

  const currentStatus = task?.status || "todo";

  const handleSave = () => {
    if (onSave && task) {
      console.log('DEBUG: Salvando tarefa', {
        ...task,
        title,
        description,
        observations,
        additionalInfo
      });
      onSave({
        ...task,
        title,
        description,
        observations,
        additionalInfo
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-[#3333339a] z-40" onClick={onClose} />
      <div className="bg-white rounded-lg w-[900px] max-w-full shadow-2xl relative flex flex-col z-50">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#1C1B1B] p-6 rounded-t-lg min-h-[70px]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-lg font-bold text-gray-500">+2</div>
            <div>
              <input
                className="text-xl font-semibold text-yellow-400 leading-tight bg-transparent outline-none border-b border-yellow-400"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Título da tarefa"
              />
              <div className="text-xs text-gray-300">funcionário</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="flex items-center gap-2 text-sm text-white font-semibold">
              <span className="w-4 h-4 rounded-full mb-1" style={{ background: statusColors[currentStatus] }} />
              {currentStatus === "doing" ? "Em andamento" : currentStatus === "done" ? "Concluído" : "A fazer"}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-200">
              <FaClock className="mr-1 text-xl" /> Sem data definida
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-row px-12 pb-6 gap-8 mt-8">
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1 text-black font-bold text-lg">
                <FaFile className="text-2xl text-[#FFC116]" /> Descrição
              </div>
              <textarea
                className="w-full h-40 bg-[#D9D9D9] rounded-xl p-4 resize-none text-gray-700 text-base font-bold"
                placeholder="Adicione uma descrição sobre a tarefa..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 text-black font-bold text-lg">
                <FaClipboardList className="text-2xl text-[#FFC116]" /> Observações
              </div>
              <textarea
                className="w-full h-32 bg-[#D9D9D9] rounded-xl p-4 resize-none text-gray-700 text-base font-bold"
                placeholder="Adicione observações adicionais..."
                value={observations}
                onChange={e => setObservations(e.target.value)}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 text-black font-bold text-lg">
                <FaInfo className="text-2xl text-[#FFC116]" /> Informações adicionais
              </div>
              <textarea
                className="w-full h-32 bg-[#D9D9D9] rounded-xl p-4 resize-none text-gray-700 text-base font-bold"
                placeholder="Adicione informações complementares..."
                value={additionalInfo}
                onChange={e => setAdditionalInfo(e.target.value)}
              />
            </div>
          </div>

          {/* Ações */}
          <div className="w-52 flex flex-col gap-3 bg-[#D9D9D9] p-3 rounded-xl h-fit ml-8 mt-8">
            <div className="flex items-center gap-2 font-bold text-black text-lg">
              <FaPencilAlt /> Ações
            </div>
            <TaskActionButton icon={<FaClock className="text-2xl" />} label="Adicione uma data" />
            <TaskActionButton icon={<FaUsers className="text-2xl" />} label="Adicione um funcionário" />
            <TaskActionButton icon={<FaTag className="text-2xl" />} label="Adicione uma etiqueta" />
            <TaskActionButton icon={<FaArchive className="text-2xl" />} label="Arquive esta tarefa" />
            <TaskActionButton icon={<FaFileArchive className="text-2xl" />} label="Anexar documento" />
            <TaskActionButton icon={<FaList className="text-2xl" />} label="Histórico de atividades" />
            <TaskActionButton icon={<FaLink className="text-2xl" />} label="Adicionar a um projeto" />

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <TaskActionButton
                icon={<FaArrowRight className="text-2xl" />}
                label="Mover Tarefa"
                onClick={() => setMoveDropdownOpen((v) => !v)}
              />
              {isMoveEnabled && moveDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    background: '#fffbe6',
                    border: '2px solid #FFC116',
                    left: '110%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    minWidth: 180,
                  }}
                  className="rounded shadow p-2 flex flex-col"
                >
                  {[{ label: "A fazer", value: "todo" },
                    { label: "Em andamento", value: "doing" },
                    { label: "Concluído", value: "done" }].map(opt => (
                    <button
                      key={opt.value}
                      className={`text-left px-2 py-1 hover:bg-yellow-100 rounded ${currentStatus === opt.value ? 'font-bold text-yellow-600' : ''}`}
                      disabled={currentStatus === opt.value}
                      onClick={() => {
                        setMoveDropdownOpen(false);
                        if (onMoveStatus && task) {
                          onMoveStatus({ ...task, title, description, observations, additionalInfo }, opt.value);
                        }
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 px-12 pb-6">
          {isDeleteEnabled && (
            <button
              className="bg-[#E91414] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-base hover:bg-[#e91414af] transition duration-500"
              onClick={() => onDelete?.(task!)}
            >
              <FaTrash /> Excluir tarefa
            </button>
          )}
          <button
            className="bg-[#83E56F] text-black px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-base hover:bg-[#83e56fc2] transition duration-500"
            onClick={handleSave}
          >
            <FaCheck className="text-white" /> Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
