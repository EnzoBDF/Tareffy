"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import HeaderWithSidebar from "../components/HeaderWithSidebar";
import Button from "../components/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductTable";

const Teste = Array.from({ length: 10 }).map((_, i) => ({
  id: `#99${i}`,
  nome: "Nome do Produto",
  quantidade: 100,
}));

export default function Estoque() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleAddProduct = (data: { nome: string; tipo: string; unidade: string }) => {
    console.log("Produto cadastrado:", data);
    // Aqui você pode adicionar no backend ou no estado
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
              <Button icon={<FaMinus />} variant="primary" onClick={() => setDeleteModalOpen(true)}>
                Excluir produto
              </Button>
            </>
          }
        />
        <ProductTable produtos={Teste} />
      </HeaderWithSidebar>

      {/* Modal de cadastro */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddProduct}
      />

      {/* Placeholder para modal de exclusão */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">Modal de exclusão ainda não implementado</div>
        </div>
      )}
    </div>
  );
}
