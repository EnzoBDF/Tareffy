"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import HeaderWithSidebar from "../components/HeaderWithSidebar";
import Button from "../components/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";
import DeleteProductModal from "../components/DeleteProductModal";
interface Product {
  id: string;
  nome: string;
  tipo: string;
  unidade: string;
  quantidade: number;
}


export default function Estoque() {
  const [products, setProducts] = useState<Product[]>(
  Array.from({ length: 10 }).map((_, i) => ({
    id: `#99${i}`,
    nome: "Nome do Produto",
    tipo: "Padrão",
    unidade: "un",
    quantidade: 0,
  }))
);


  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleAddProduct = (data: { nome: string; tipo: string; unidade: string }) => {
    const novoProduto: Product = {
      id: `#${Math.floor(Math.random() * 10000)}`, // talvez usar UUID?
      nome: data.nome,
      tipo: data.tipo,
      unidade: data.unidade,
      quantidade: 0 
    };
  
    setProducts((prev) => [...prev, novoProduto]);
    setIsAddModalOpen(false);
  };
  

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setIsDeleteModalOpen(false);
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
        <ProductTable produtos={products} setProdutos={setProducts} />
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
        products={products}
      />
    </div>
  );
}
