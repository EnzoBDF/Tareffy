"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import HeaderWithSidebar from "../components/HeaderWithSidebar";
import Button from "../components/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";
import DeleteProductModal from "../components/DeleteProductModal";

const Teste = Array.from({ length: 10 }).map((_, i) => ({
  id: `#99${i}`,
  nome: "Nome do Produto",
  quantidade: 100,
}));

export default function Estoque() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(Teste[0]); // Exemplo fixo

  const handleAddProduct = (data: { nome: string; tipo: string; unidade: string }) => {
    console.log("Produto cadastrado:", data);
    // Aqui você pode adicionar no backend ou no estado
  };

  const handleDeleteProduct = () => {
    console.log("Produto deletado:", selectedProduct);
    setIsDeleteModalOpen(false);
    // Aqui você pode remover do estado ou chamar backend
  };

  return (
    <div className="bg-[#f3f3f3]">
      <HeaderWithSidebar>
        <TitleBar
          role="gerente"
          name="Paulo"
          subtitle="Home - Área Gerente"
          rightContent={
            <>
              <Button icon={<FaPlus />} variant="primary" onClick={() => setIsAddModalOpen(true)}>
                Cadastrar produto
              </Button>
              <Button icon={<FaMinus />} variant="primary" onClick={() => setIsDeleteModalOpen(true)}>
                Excluir produto
              </Button>
            </>
          }
        />
        <ProductTable produtos={Teste} />
      </HeaderWithSidebar>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddProduct}
      />

      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteProduct}
        productName={selectedProduct.nome}
        productId={selectedProduct.id}
      />
    </div>
  );
}
