"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import { funcionarios as allFuncionarios, Funcionario } from "../data/funcionarios";

interface ModalFuncionariosProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (funcionario: Funcionario) => void;
}

export default function ModalFuncionarios({ isOpen, onClose, onSelect }: ModalFuncionariosProps) {
  const [busca, setBusca] = useState("");

  if (!isOpen) return null;

  const funcionariosFiltrados = allFuncionarios.filter((f) =>
    `${f.nome} ${f.cargo}`.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-[#3333339a] flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 w-[400px] h-150 overflow-y-auto shadow-lg space-y-4">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquise por um funcionário ou cargo"
        />
        <div className="bg-[#EBE8E8] rounded-[0.3rem] w-auto h-[90%]">
        <ul className="space-y-3">
          {funcionariosFiltrados.map((func) => (
            <li
              key={func.id}
              className=" text-black flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(func);
                onClose();
              }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={func.avatarUrl}
                  alt={func.nome}
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-medium">{func.nome}</p>
                  <p className="text-sm text-gray-500">{func.cargo}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}
