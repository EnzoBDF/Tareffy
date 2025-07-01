"use client"

// src/app/components/ProjectModal.tsx
import React, { useState } from "react";
import { FaCalendar, FaCheckSquare, FaClipboard, FaEnvelopeOpenText, FaPaperclip, FaTextHeight, FaUsers } from "react-icons/fa";
import EmployeeAvatar from "./EmployeeAvatar";
import Button from "./Button";

const employeesMock = [
  { id: 1, name: "Marcela T.", avatar: "/public/icon1.svg" },
  { id: 2, name: "Marcela T.", avatar: "/public/icon2.svg" },
  { id: 3, name: "Marcela T.", avatar: "/public/icon3.svg" },
];

export default function ProjectModal({ isOpen, onClose, onSave }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [employees, setEmployees] = useState([]);
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const handleEmployeeToggle = (id) => {
    setEmployees((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, description, deadline, employees, file });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#3333339a]  flex items-center justify-center z-50">
      
      <form
        className="bg-white rounded-xl p-8 w-[50rem] justify-between shadow-lg relative flex flex-row"
        onSubmit={handleSubmit}
      >
        

      
        <button
          type="button"
          className="absolute top-4 right-4 text-xl"
          onClick={onClose}
        >
          ×
        </button>
      
        <div className="mb-4 space-y-6 w-[100%]">
     
          <label className=" font-normal mb-1 text-black flex flex-row items-center text-xl"><FaCheckSquare className="text-yellow-400 text-2xl mr-3"/>Nome do projeto</label>
          <input
            className="w-full rounded-md p-3 bg-[#D9D9D9] text-black "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
 
          <label className="font-normal mb-1 text-black flex flex-row items-center text-xl"><FaEnvelopeOpenText className="text-yellow-400 text-2xl mr-3"/>Descrição do projeto</label>
          <textarea
            className="w-full rounded-md h-48 p-2 bg-[#D9D9D9] text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            required
          />
             <div className="flex-1">
            <label className="font-normal mb-1 text-black flex flex-row items-center text-xl"><FaUsers className="text-yellow-400 text-2xl mr-3"/>Funcionários atribuídos</label>
            <div className="relative">
              <div className="flex gap-2 bg-[#D9D9D9] p-2 h-52 rounded-md">
                {employeesMock.map((emp, idx) => {
                  const ringColors = ["ring-yellow-400", "ring-red-400", "ring-indigo-400"];
                  const labelBgColors = ["bg-yellow-400", "bg-red-300", "bg-indigo-300"];
                  return (
                    <EmployeeAvatar
                      key={emp.id}
                      name={emp.name}
                      avatar={emp.avatar}
                      ringColor={ringColors[idx % ringColors.length]}
                      labelBgColor={labelBgColors[idx % labelBgColors.length]}
                      onClick={() => handleEmployeeToggle(emp.id)}
                      selected={employees.includes(emp.id)}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                className="absolute bottom-[-4%] right-[-3%] w-12 h-12 rounded-full bg-yellow-400 text-3xl flex items-center justify-center shadow-xl hover:bg-yellow-500 transition text-black"
                onClick={() => {/* ação de adicionar funcionário */}}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 flex gap-4 w-[25%] ml-20">
                
          <div className="flex-1 flex flex-col gap-2 w-[100%] space-y-6">
            <label className=" font-normal mb-1 text-black text-xl flex flex-row"><FaCalendar className="text-yellow-400 text-2xl mr-3"/>Prazo</label>
            <input
              type="date"
              className="rounded-md inset-shadow-black p-3 bg-[#D9D9D9] text-black"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
            <label className=" font-normal mb-1 text-black text-xl flex flex-row items-center"><FaPaperclip className="text-yellow-400 text-2xl mr-3"/>Anexar Documento</label>
            <input
              type="file"
              className="rounded-md  p-3  text-black bg-[#FFC116] shadow-xl"
              onChange={handleFileChange}
            />
             <Button type="submit" variant="primary" className="w-max rounded-xl absolute mt-[68%] right-0 font-thin">Criar Projeto</Button>
          </div>
          
        </div>
      
      </form>
    </div>
  );
}