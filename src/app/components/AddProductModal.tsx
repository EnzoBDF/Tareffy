import Modal from "./Modal";
import ModalProductForm from "./ModalProductForm";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { nome: string; tipo: string; unidade: string }) => void;
}

export default function AddProductModal({ isOpen, onClose, onSubmit }: AddProductModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} containerClassName="w-200 p-0 bg-transparent shadow-none">
      <div className="bg-[#2c2c2c] text-yellow-400 font-bold px-4 py-4 rounded-t-[0.6rem]">
        Cadastro de produto
      </div>
      <ModalProductForm onSubmit={onSubmit} onClose={onClose} />
    </Modal>

  );
}
