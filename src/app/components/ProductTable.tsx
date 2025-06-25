"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";

type Produto={
    id: String;
    nome:String;
    quantidade:number;
};
interface ProductListProps{
    produtos: Produto[];
} 


export default function ProductTable({produtos}:ProductListProps){
        const [search, setSearch] = useState("");

        const productFilter = produtos.filter((produto) =>(
            produto.nome.toLowerCase().includes(search.toLowerCase()))
        );
        return (
            <div className="bg-white rounded-lg shadow-md mt-4 overflow-auto">
              <div className="bg-[#2c2c2c] text-white px-4 py-2 flex items-center gap-4">
                <span className="font-bold text-yellow-400 w-1/3">Produto</span>
                <div className="w-1/3">
                  <SearchBar value={search} onChange={setSearch} placeholder="Pesquisar" />
                </div>
                <span className="font-bold text-yellow-400 w-1/6 text-center">ID</span>
                <span className="font-bold text-yellow-400 w-1/6 text-center">Quantidade</span>
              </div>
        
              <div className="max-h-[400px] overflow-y-auto divide-y">
                {productFilter.map((produto, index) => (
                  <div key={index} className="flex px-4 py-3 hover:bg-gray-100">
                    <span className="w-1/3 text-black">{produto.nome}</span>
                    <span className="w-1/3 text-center text-black">{produto.id}</span>
                    <span className="w-1/3 text-center text-black">{produto.quantidade}</span>
                  </div>
                ))}
              </div>
            </div>
          ); 
}

