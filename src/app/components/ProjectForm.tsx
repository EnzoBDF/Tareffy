"use client";

import { useState } from "react";
import {
  FaCalendar,
  FaCheckSquare,
  FaEnvelopeOpenText,
  FaPaperclip,
  FaUsers,
} from "react-icons/fa";

import EmployeeAvatar from "./EmployeeAvatar";
import Button from "./Button";
import EmployeeModal from "./EmployeeModal";
import { funcionarios, Funcionario } from "../data/funcionarios";

interface ProjectFormProps {
  onSave: (data: {
    name: string;
    description: string;
    deadline: string;
    employees: number[];
    file: File | null;
  }) => void;
  onClose: () => void;
}

export default function ProjectForm({ onSave, onClose }: ProjectFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [employees, setEmployees] = useState<Funcionario[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [isEmployeeModalOpen, setEmployeeModalOpen] = useState(false);

  const handleEmployeeToggle = (func: Funcionario) => {
    setEmployees((prev) =>
      prev.find((e) => e.id === func.id)
        ? prev.filter((e) => e.id !== func.id)
        : [...prev, func]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      description,
      deadline,
      employees: employees.map((e) => e.id),
      file,
    });
    onClose();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-between space-x-6"
      >
       
        <div className="space-y-6 w-[70%]">
          <label className="text-black text-xl flex items-center">
            <FaCheckSquare className="text-yellow-400 text-2xl mr-3" />
            Nome do projeto
          </label>
          <input
            className="w-full rounded-md p-3 bg-[#D9D9D9] text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="text-black text-xl flex items-center">
            <FaEnvelopeOpenText className="text-yellow-400 text-2xl mr-3" />
            Descrição do projeto
          </label>
          <textarea
            className="w-full h-48 rounded-md p-2 bg-[#D9D9D9] text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div>
            <label className="text-black text-xl flex items-center mb-2">
              <FaUsers className="text-yellow-400 text-2xl mr-3" />
              Funcionários atribuídos
            </label>

            <div className="relative">
              <div className="flex gap-2 bg-[#D9D9D9] p-2 h-52 rounded-md overflow-y-auto">
                {employees.map((emp, idx) => {
                  const ringColors = [
                    "ring-yellow-400",
                    "ring-red-400",
                    "ring-indigo-400",
                  ];
                  const labelBgColors = [
                    "bg-yellow-400",
                    "bg-red-300",
                    "bg-indigo-300",
                  ];
                  return (
                    <EmployeeAvatar
                      key={emp.id}
                      name={emp.nome}
                      avatar={emp.avatarUrl}
                      ringColor={ringColors[idx % ringColors.length]}
                      labelBgColor={labelBgColors[idx % labelBgColors.length]}
                      onClick={() => handleEmployeeToggle(emp)}
                      selected
                    />
                  );
                })}
              </div>

              
              <Button variant="circle" onClick={() => setEmployeeModalOpen(true)} className="absolute bottom-[-4%] right-[-3%] px-5 py-3 text-center">+</Button>
            </div>
          </div>
        </div>
       
        <div className="space-y-6 w-[30%] flex flex-col justify-between">
          <div>
            <label className="text-black text-xl flex items-center">
              <FaCalendar className="text-yellow-400 text-2xl mr-3" />
              Prazo
            </label>
            <input
              type="date"
              className="rounded-md p-3 bg-[#D9D9D9] text-black w-full"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-black text-xl flex items-center">
              <FaPaperclip className="text-yellow-400 text-2xl mr-3" />
              Anexar Documento
            </label>
            <input
              type="file"
              className="rounded-md p-3 bg-[#FFC116] text-black shadow-xl w-full"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-max rounded-xl mt-4 self-end font-thin"
          >
            Criar Projeto
          </Button>
        </div>
      </form>

      
      <EmployeeModal
        isOpen={isEmployeeModalOpen}
        onClose={() => setEmployeeModalOpen(false)}
        onSelect={(f) => {
          handleEmployeeToggle(f);
        }}
      />
    </>
  );
}
