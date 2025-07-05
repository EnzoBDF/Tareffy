import Modal from "./Modal";
import ModalDeleteForm from "./ModalDeleteForm";

interface Product {
  id: string;
  nome: string;
  quantidade: number;
}

interface DeleteProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
  products: Product[];
}

export default function DeleteProductModal({
  isOpen,
  onClose,
  onDelete,
  products,
}: DeleteProductModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} containerClassName="w-120 p-0 bg-transparent shadow-none rounded-b-[0.6rem]">
      <div className="bg-[#2c2c2c] text-yellow-400 font-bold px-4 py-4 rounded-t-[0.6rem] ">
        Excluir
      </div>
      <ModalDeleteForm products={products} onDelete={onDelete} onClose={onClose} />
    </Modal>
  );
}
