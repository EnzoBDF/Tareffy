import Modal from "./Modal"
import ModalDeleteForm from "./ModalDeleteForm";

interface DeleteProductModalProps{
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  productName: string;
  productId: string;


}

export default function DeleteProductModal({isOpen, onClose, onDelete, productName, productId}:DeleteProductModalProps){
    
    
    return(
        <Modal isOpen={isOpen} onClose={onClose} containerClassName="w-100 p-0 bg-transparent shadow-none">
            <div className="text-xl font-bold text-[#FFCB05] bg-[#2C2C32] rounded-t-xl -mt-6 -mx-6 px-6 py-3">
                Excluir
            </div>
            <ModalDeleteForm productName={productName} productId={productId} onDelete={onDelete} onClose={onClose}/>
        </Modal>
    )
}