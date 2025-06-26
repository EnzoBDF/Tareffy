"use client";

import { useState } from "react";
import Button from "./Button";

interface ModalProductFormProps {
  onSubmit: (data: { nome: string; tipo: string; unidade: string }) => void;
  onClose: () => void;
}

export default function ModalProductForm({ onSubmit, onClose }: ModalProductFormProps) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [unidade, setUnidade] = useState("un");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nome, tipo, unidade });
  };

  return (
    <div className="w-200 rounded-b-[0.6rem] shadow-lg overflow-hidden bg-white">
        
        <form onSubmit={handleSubmit} className=" px-6 py-5 space-y-4">
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <div className="col-span-2">
            <label className="block text-sm font-semibold mb-1 text-black">Nome do produto</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} style={{ boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.25), inset 0px -2px 4px rgba(255,255,255,0.3)' }} className="bg-[#D9D9D9] text-black w-120 border border-gray-300 rounded-[0.5rem] px-3 py-[0.2rem]" />
            </div>

          <div className="col-span-1">
            <label className="block text-sm font-semibold mb-1 text-black">Unidade</label>
            <select value={unidade} onChange={(e) => setUnidade(e.target.value)} style={{ boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.25), inset 0px -2px 4px rgba(255,255,255,0.3)' }} className="bg-[#D9D9D9] text-black w-30 border border-gray-300 rounded-[0.5rem] px-3 py-[0.4rem]">
              <option value="un">Unidade</option>
              <option value="kg">Kg</option>
              <option value="l">Litro</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold mb-1 text-black">Tipo de produto</label>
            <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.25), inset 0px -2px 4px rgba(255,255,255,0.3)' }} className="bg-[#D9D9D9] text-black w-120 border border-gray-300 rounded-[0.5rem] px-3 py-[0.2rem]" />
          </div>
        </div>
        
        <div className="flex justify-end gap-4 pt-4">
          <Button onClick={onClose} variant="secondary">Cancelar</Button>
          <Button type="submit" variant="primary">Cadastrar</Button>
        </div>
      </form>
    </div>
  );
}
