"use client";
import { useState } from "react";
import Button from "./Button";

type Produto = {
  id: string;
  nome: string;
  tipo: string;
  unidade: string;
  quantidade: number;
};
interface ProductTableProps {
  produtos: Produto[];
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export default function ProductTable({ produtos, setProdutos }: ProductTableProps) {
  const [search, setSearch] = useState("");

  const handleQuantityChange = (id: string, value: number) => {
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantidade: value } : p))
    );
  };

  const handleManualEdit = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      handleQuantityChange(id, value);
    }
  };

  const productFilter = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-center bg-white rounded-lg shadow-md mt-4 ">
      <div className="bg-[#2c2c2c] px-4 py-5 flex items-center gap-4 text-sm font-bold rounded-t-lg">
        <span className="text-yellow-400 w-1/5">Produto</span>
        <span className="text-yellow-400 w-1/5">Tipo</span>
        <span className="text-yellow-400 w-1/5">Unidade</span>
        <span className="text-yellow-400 w-1/5">ID</span>
        <span className="text-yellow-400 w-1/5">Qtd.</span>
      </div>

      <div className="max-h-150 overflow-y-auto divide-y scroll-stable">
        {productFilter.map((produto) => (
          <div key={produto.id} className="flex px-4 py-3 items-center hover:bg-gray-100 text-black text-sm">
            <span className="w-1/5">{produto.nome}</span>
            <span className="w-1/5">{produto.tipo}</span>
            <span className="w-1/5">{produto.unidade}</span>
            <span className="w-1/5 pl-5">{produto.id}</span>
            <div className="w-1/5 flex items-center justify-center gap-2 pl-10">
              <Button variant="circle" onClick={()=>handleQuantityChange(produto.id, produto.quantidade -1)}>-</Button>
              <input
                type="text"
                value={produto.quantidade}
                onChange={(e) => handleManualEdit(e, produto.id)}
                className="w-14 text-center border border-gray-300 rounded "
              />
              <Button variant="circle" onClick={() => handleQuantityChange(produto.id, produto.quantidade + 1)}>+</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
