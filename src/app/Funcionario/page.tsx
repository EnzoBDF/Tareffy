'use client'

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/HeaderGerente';

type Funcionario = {
  id: number;
  nome: string;
  sobrenome: string;
  cargo: string;
  dataNascimento: string;
  dataAdmissao: string;
  observacoes: string;
  foto?: string;
};

const FuncionariosPage = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([
    {
      id: 1,
      nome: "Bernardo",
      sobrenome: "Machado",
      cargo: "Desenvolvedor Sênior",
      dataNascimento: "2000-05-23",
      dataAdmissao: "2024-01-01",
      observacoes: "",
      foto: "/funcionario.svg",
    },
    {
      id: 2,
      nome: "Ana",
      sobrenome: "Souza",
      cargo: "Designer",
      dataNascimento: "1998-10-15",
      dataAdmissao: "2023-09-01",
      observacoes: "",
       foto: "/funcionario.svg",
    },

    {
      id: 3,
      nome: "Mateus",
      sobrenome: "Nicolas",
      cargo: "Estagiario",
      dataNascimento: "1998-10-15",
      dataAdmissao: "2023-09-01",
      observacoes: "",
       foto: "/funcionario.svg",
    },

        {
      id: 4,
      nome: "Lucas",
      sobrenome: "Silva",
      cargo: "QA",
      dataNascimento: "1998-10-15",
      dataAdmissao: "2023-09-01",
      observacoes: "",
       foto: "/funcionario.svg",
    },

        {
      id: 5,
      nome: "Andre",
      sobrenome: "Claro",
      cargo: "Engenheiro de Software",
      dataNascimento: "1998-10-15",
      dataAdmissao: "2023-09-01",
      observacoes: "",
       foto: "/funcionario.svg",
    },

  ]);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cargo, setCargo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [foto, setFoto] = useState<File | undefined>(undefined)

  const handleCadastrar = () => {
    if (!nome || !sobrenome || !cargo || !dataNascimento || !dataAdmissao) return;

    const novoFuncionario: Funcionario = {
      id: Math.floor(Math.random() * 10000),
      nome,
      sobrenome,
      cargo,
      dataNascimento,
      dataAdmissao,
      observacoes,
      foto: foto ? URL.createObjectURL(foto) : "/default.png", // Aqui você pode fazer upload real depois
    };

    setFuncionarios((prev) => [...prev, novoFuncionario]);

    // Limpar campos
    setNome("");
    setSobrenome("");
    setCargo("");
    setDataNascimento("");
    setDataAdmissao("");
    setObservacoes("");
    setFoto(undefined);
  };

  return (
    <div className="flex min-h-screen bg-[#FFFAFA]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Saudação no topo */}
        <div className="w-[80-vw] flex justify-between items-center px-8 py-6">
          <div className="w-full  mx-auto bg-[#2C2C32] rounded-[25px] flex flex-row justify-between items-center px-8 py-6">
            <div>
              <h2 className="text-[2.25rem] font-normal text-[#FFFFFF]">
                Olá Gerente <span className="font-bold">Paulo!</span>
              </h2>
              <p className="text-[#FFFFFF] mt-2 text-[1rem]">Cadastro de funcionários</p>
            </div>
          </div>
        </div>
          
        <div className="flex flex-row justify-evenly p-6 gap-6">
          {/* Lista de funcionários */}
          

          
          <div className="bg-[#2C2C32] text-white rounded  p-1 w-1/3 h-[84vh] rounded-[20px] ">
            {funcionarios.map((f) => (
              <div key={f.id} className="flex items-center gap-2 p-6 w-full  border-b border-[#fff]">
                <img src={f.foto} alt="Foto" className="w-20 h-15 rounded-full" />
                <div className='flex flex-col'>
                  <p className="font-bold text-[1.5rem] w-[20vw]">{f.nome} {f.sobrenome}</p>
                  <p className="text-[1.25rem] ">{f.cargo}</p>
                </div>
                 <div className='ml-[0vw]'>
                    <img className='w-6' src="/pepicons.svg" alt="" />
                  </div>
              </div>
            ))}
          </div>

     <div
        className="bg-[#2C2C32] text-white rounded-[1rem] p-4 flex flex-col justify-between items-center"
            style={{ width: "30.99vw", height: "83.5vh" }}
            >
            <h2 className="text-[1.875rem] font-bold mb-4">Cadastro de funcionário</h2>

            <div className="grid grid-cols-2 gap-4">
                {/* Nome */}
                <div className="col-span-2 mt-[-15vh] justify-self-center">
                <label className="text-[#FFC116] mb-1 block ">Nome</label>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="p-2 rounded text-black bg-[#FFFFFF]"
                    style={{ width: "24.563vw", height: "5.4vh" }}
                />
                </div>

                {/* Sobrenome */}
                <div className="col-span-2 justify-self-center mt-[-6vh]">
                <label className="text-[#FFC116] mb-1 block">Sobrenome</label>
                <input
                    type="text"
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    className="p-2 rounded text-black bg-[#FFFFFF]"
                    style={{ width: "24.563vw", height: "5.4vh" }}
                />
                </div>

                {/* Data de Nascimento */}
                <div className="justify-self-center">
                <label className="text-[#FFC116] mb-1 block">Data de nasc.</label>
                <input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    className="p-2 rounded text-black bg-[#FFFFFF]"
                    style={{ width: "11.521vw", height: "5.4vh" }}
                />
                </div>

                {/* Cargo */}
                <div className="justify-self-center">
                <label className="text-[#FFC116] mb-1 block">Cargo</label>
                <input
                    type="text"
                    placeholder="Cargo"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    className="p-2 rounded text-black bg-[#FFFFFF]"
                    style={{ width: "10.219vw", height: "5.4vh" }}
                />
                </div>

                {/* Data de Admissão */}
                <div className="justify-self-center">
                <label className="text-[#FFC116] mb-1 block">Data de admissão</label>
                <input
                    type="date"
                    value={dataAdmissao}
                    onChange={(e) => setDataAdmissao(e.target.value)}
                    className="p-2 rounded text-black bg-[#FFFFFF]"
                    style={{ width: "11.521vw", height: "5.4vh" }}
                />
                </div>

                {/* Foto */}
                <div className="justify-self-center ">
                    <label className="text-[#FFC116] mb-1 block">Foto</label>
                    <input
                        type="file"
                        onChange={(e) => setFoto(e.target.files?.[0])}
                        className="p-2 rounded text-black bg-white"
                        style={{ width: "9.219vw", height: "22.6vh" }}
                    />
                    </div>

                    {/* Observações */}
                    <div className="  row-start-5">
                    <label className="text-[#FFC116] mt-[-16vh] block">Observações</label>
                    <textarea
                        placeholder="Observações"
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                        className="p-2 rounded text-black bg-[#FFFFFF]"
                        style={{ width: "11.302vw", height: "12.4vh" }}
                    />
                </div>
            </div>

            {/* Botão */}
            <button
                onClick={handleCadastrar}
                className="bg-[#FFC116] text-black text-[1.5rem] py-2 px-4 rounded-[15px] w-[13.854vw] h-[7.5vh] font-bold  mt-[-10vh]"
            >
                Cadastrar
            </button>
            </div>


        </div>
      </div>
    </div>
  );
};

export default FuncionariosPage;
