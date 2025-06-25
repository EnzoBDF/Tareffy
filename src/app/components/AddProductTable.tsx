"use client";

import Modal from "./Modal";
import ModalProductForm from "./ModalProductForm";

interface AddProductTableProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { nome: string; tipo: string; unidade: string }) => void;
}

export default function AddProductTable({ isOpen, onClose, onSubmit }: AddProductTableProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} containerClassName="w-200 p-0 bg-transparent shadow-none">
      <div className="bg-[#2c2c2c] text-yellow-400 font-bold px-4 py-4 rounded-t-[0.6rem]">
        Cadastro de produto
      </div>
      <ModalProductForm onSubmit={onSubmit} onClose={onClose} />
    </Modal>

  );
}
