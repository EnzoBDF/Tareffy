"use client";

import { useState } from "react";
import Button from "./Button";

interface ModalDeleteFormProps {
  productName: string;
  productId: string;
  onDelete: () => void;
  onClose: () => void;
}

export default function ModalDeleteForm({ productName, productId, onDelete, onClose }: ModalDeleteFormProps) {
  const [confirmId, setConfirmId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmId === productId) {
      onDelete();
      setConfirmId("");
    } else {
      alert("O ID informado não confere.");
    }
  };

  return (
    <div className="bg-white rounded-b-[0.6rem] shadow-lg flex justify-center">
    <form onSubmit={handleSubmit} className="p-6 text-black">
      <label className="block text-sm font-semibold mt-4 mb-1">Nome do item</label>
      <input
        type="text"
        value={productName} //arrumar em casa
        className="w-100 p-2 rounded border bg-gray-100 text-gray-700"
      />

      <div className="flex gap-4 mt-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">ID</label>
          <input
            type="text"
            value={productId} //arrumar em casa
            className="w-40 p-2 rounded border bg-gray-100 text-gray-700"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">Confirme ID</label>
          <input
            type="text"
            value={confirmId}
            onChange={(e) => setConfirmId(e.target.value)}
            className="w-40 p-2 rounded border"
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
