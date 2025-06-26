"use client";

import { useState } from "react";
import Button from "./Button";

interface Product {
  id: string;
  nome: string;
  quantidade: number;
}

interface ModalDeleteFormProps {
  products: Product[];
  onDelete: (id: string) => void;
  onClose: () => void;
}

export default function ModalDeleteForm({ products, onDelete, onClose }: ModalDeleteFormProps) {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [confirmId, setConfirmId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const produtoEncontrado = products.find(
      (p) => p.nome === nome && p.id === id && confirmId === id
    );

    if (produtoEncontrado) {
      onDelete(produtoEncontrado.id);
      setNome("");
      setId("");
      setConfirmId("");
    } else {
      alert("As informações inseridas não conferem com nenhum produto.");
    }
  };

  return (
    <div className="bg-white rounded-b-[0.6rem] shadow-lg flex justify-center">
      <form onSubmit={handleSubmit} className="p-6 text-black">
        <label className="block text-sm font-semibold mt-4 mb-1">Nome do item</label>
        <input  style={{ boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.25), inset 0px -2px 4px rgba(255,255,255,0.3)' }}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-100 p-2 border bg-[#D9D9D9] text-black border-gray-300 rounded-[0.5rem] px-3 py-[0.2rem]"
          required
        />

        <div className="flex gap-4 mt-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">ID</label>
            <input style={{ boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.25), inset 0px -2px 4px rgba(255,255,255,0.3)' }}
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-40 p-2 border bg-[#D9D9D9] text-black border-gray-300 rounded-[0.5rem] px-3 py-[0.2rem]"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">Confirme ID</label>
            <input  style={{ boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.25), inset 0px -2px 4px rgba(255,255,255,0.3)' }}
              type="text"
              value={confirmId}
              onChange={(e) => setConfirmId(e.target.value)}
              className="w-40 p-2  border bg-[#D9D9D9] text-black border-gray-300 rounded-[0.5rem] px-3 py-[0.2rem]"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 mt-10">
          <Button onClick={onClose} variant="secondary">Cancelar</Button>
          <Button type="submit" variant="primary">Excluir</Button>
        </div>
      </form>
    </div>
  );
}
