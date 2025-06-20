"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/HeaderGerente";
import Swal from 'sweetalert2'
import { FiSearch } from "react-icons/fi"; // Ícone de lupa (se quiser)
import { setDefaultAutoSelectFamily } from "node:net";

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  tipo?: string;
  produtoSelecionado?: string;
}

const EstoquePage = () => {
  const [produtos, setProdutos] = useState<Produto[]>([
    { id: 1001, nome: "Arroz", quantidade: 50 },
    { id: 1002, nome: "Feijão", quantidade: 75 },
    { id: 1003, nome: "Macarrão", quantidade: 120 },
    { id: 1004, nome: "Açúcar", quantidade: 60 },
    { id: 1005, nome: "Sal", quantidade: 40 },
    { id: 1006, nome: "Café", quantidade: 30 },
    { id: 1007, nome: "Leite", quantidade: 90 },
    { id: 1008, nome: "Óleo", quantidade: 55 },
    { id: 1009, nome: "Farinha", quantidade: 70 },
    { id: 1010, nome: "Bolacha", quantidade: 110 },
    { id: 1011, nome: "Manteiga", quantidade: 25 },
    { id: 1012, nome: "Refrigerante", quantidade: 80 },
    { id: 1013, nome: "Detergente", quantidade: 45 },
    { id: 1014, nome: "Sabão em pó", quantidade: 65 },
    { id: 1015, nome: "Shampoo", quantidade: 35 },

  ]);

const UnidadesDisponives = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

  const [busca, setBusca] = useState("");
  const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);
  const [mostrarModalExcluir, setMostrarModalExcluir] = useState(false);
  const [nomeExcluir,setNomeExcluir] = useState<string>("")
  const [idExcluir,setIdExcluir] = useState<number | null>(null)
  const [confirmarId,setConfirmarId] = useState<number | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(1);
  const [nomeProduto, setNomeProduto] = useState("");
  const [tipoProduto, setTipoProduto] = useState("");


  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );


  const handleCadastrar = (nome: string, tipo: string, quantidade: number, produtoSelecionado:string) => {
    if(!nome || !tipo || !quantidade){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos!",
      });
      return;
    }

    const novoProduto: Produto = {
      id: Math.floor(Math.random() * 10000),
      nome,
      tipo,
      produtoSelecionado,
      quantidade,
    };
    setProdutos((prev) => [...prev, novoProduto]);
    setMostrarModalCadastro(false);
  };

  const handleExcluir = (id:number,nome:string) => {
      setProdutos((prev) => prev.filter((p) => p.id !== id && p.nome.toLowerCase() !== nome.toLowerCase()));

    setNomeExcluir("");
    setIdExcluir(null);
    setConfirmarId(null);
    setMostrarModalExcluir(false);
  }

  return (
    <div className="flex min-h-screen bg-[#F3F3F3]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header /> 

        <main className="p-8">
          {/* Botões */}
          <div className="flex justify-end gap-4 mb-4">
             <div className="mb-8 mr-[0vw] w-[85.167vw] h-[13.5vh] bg-[#2C2C32] p-[1vw] rounded-[25px] flex flex-row justify-between items-center">
            <div>
                <h2 className="text-[2.25rem] font-regular text-[#FFFFFF]">
                    Olá Gerente <span className="text-[#FFFFFF] font-bold">Paulo!</span>
                </h2>

                <p className="text-[#FFFFFF] mt-[0.5vh] ml-[0.2vw] text-[1rem]">Estoque</p>
            </div>
          
          
            <div className="">
                <button
                    onClick={() => setMostrarModalCadastro(true)}
                    className="bg-[#FFC116] text-white font-bold h-[6.6vh] py-2 px-4 rounded hover:bg-yellow-500 transition m-[1vw]"
                    >
                    Cadastrar Produto <span className="p-[1vw] bg-[#fff] text-[#000] rounded-full">+</span>
                </button>

                <button
                    onClick={() => setMostrarModalExcluir(true)}
                    className="bg-[#FFC116] text-white h-[6.6vh] font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
                    >
                    Excluir Produto <span className="p-[1vw] bg-[#fff] text-[#000] rounded-full">-</span>
                </button>
            
            </div>
          </div>

       
          </div>

          {/* Tabela */}
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-[#2C2C32] text-white">
                <tr>
                  {/* Produto + campo de busca */}
                  <th className="py-3 px-4 text-left">
                    <div className="flex flex-row">
                      <span className="text-[#FFC116] font-extrabold mt-[1vh]">Produto</span>
                      <div className="relative mt-1 ml-[10vw]">
                        <input
                          type="text"
                          placeholder="Pesquisar..."
                          value={busca}
                          onChange={(e) => setBusca(e.target.value)}
                          className="pl-8  pr-2 py-1 bg-[#ffffff] font-extralight rounded-full text-[#000000] text-sm border border-[none] w-full h-[4vh]"
                        />
                        {/* Ícone lupa (opcional) */}
                        <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      </div>
                    </div>
                  </th>

                  <th className="py-3 px-4 text-left text-[#FFC116] font-extrabold">ID</th>
                  <th className="py-3 px-4 text-left text-[#FFC116] font-extrabold">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {produtosFiltrados.length > 0 ? (
                  produtosFiltrados.map((produto) => (
                    <tr key={produto.id} className="border-b border-[#000000] ">
                      <td className="py-[1.5vw] px-[2vw] text-[#000000]">{produto.nome}</td>
                      <td className="py-[1.5vw] px-[2vw] text-[#000000]">#{produto.id}</td>
                      <td className="py-[1.5vw] px-[2vw] text-[#000000]">{produto.quantidade}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      Nenhum produto encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>

          {mostrarModalCadastro && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#000000] opacity-95 z-10">
            <div className="bg-white  rounded shadow w-[51.146vw] overflow-hidden">
                <div className="bg-[#2C2C32] p-4">
                  <h2 className="text-xl text-[#FFC116] font-bold">Cadastrar Produto</h2>
                </div>

                <div className="flex flex-row p-4 m-[1vw]">
                    <div >
                      <input
                        type="text"
                        placeholder="Nome do Produto"
                        className="borde w-full mb-3 p-2 border rounded text-[#000000] bg-[#D9D9D9]r"
                        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                        onChange={(e) => setNomeProduto(e.target.value)}
                      />

                      <input
                        type="text"
                        placeholder="Tipo do Produto"
                        className="borde w-full mb-3 p-2 border rounded text-[#000000] bg-[#D9D9D9]r"
                        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                        onChange={(e) => setTipoProduto(e.target.value)}
                      />
                    </div>

                    <div className="ml-[10vw] bottom-[vh]">
                      <select 
                        value={produtoSelecionado}
                        onChange={(e) => setQuantidade(Number(e.target.value))}
                        className="w-full text-[#000] p-3 m-1 rounded-[10px] border bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                      >
                        <option>Unidades</option>
                        {UnidadesDisponives.map((nome) =>(
                          <option key={nome} value={nome}> {nome}</option>
                        ))}
                      </select>
                    </div>
                  
                </div>

                <div className="p-4 flex flex-row justify-end m-1">
                    <button
                      onClick={() => setMostrarModalCadastro(false)}
                      className="bg-gray-400  text-[#000000] font-bold px-4 py-2 rounded m-1"
                    >
                      Cancelar
                    </button>

                    <button
                      onClick={() => handleCadastrar(nomeProduto, tipoProduto, quantidade, produtoSelecionado)}
                      className="bg-[#FFC116]  px-4 py-2 rounded mr-2 text-[#000000] font-bold rounded m-1"
                    >
                      Cadastrar
                    </button>


                </div>
            </div>
          </div>
        )}


    {mostrarModalExcluir && (
  <div className="fixed inset-0 flex items-center justify-center bg-[#000000] opacity-95 z-10">
    <div className="bg-white rounded-[1vw] shadow w-96 overflow-hidden">

      <div className="bg-[#2C2C32] p-4">
        <h2 className="text-xl text-[#FFC116] font-bold">Excluir Produto</h2>
      </div>

      <div className="p-4">

        <input
          type="text"
          placeholder="Nome do item"
          className="w-full mb-3 p-2 border rounded text-[#000000] bg-[#D9D9D9]"
          value={nomeExcluir}
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          onChange={(e) => setNomeExcluir(e.target.value)}
        />

        <div className="flex gap-2 mb-3">
          <input
            type="number"
            placeholder="ID"
            className="w-full p-2 border rounded text-[#000000]  bg-[#D9D9D9]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            value={idExcluir ?? ""}
            onChange={(e) => setIdExcluir(e.target.value === "" ? null : Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Confirme ID"
            className="w-full p-2 border rounded text-[#000000]  bg-[#D9D9D9]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            value={confirmarId ?? ""}
            onChange={(e) => setConfirmarId(e.target.value === "" ? null : Number( e.target.value))}
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => handleExcluir(Number(idExcluir), nomeExcluir)}
            className=" px-4 py-2 rounded bg-[#FFC116] text-[#000000] font-bold"
             style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Excluir
          </button>
          <button
            onClick={() => setMostrarModalExcluir(false)}
            className="bg-[#D9D9D9] text-[#000000] font-bold px-4 py-2 rounded"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Cancelar
          </button>
        </div>

      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
}
;


export default EstoquePage;
