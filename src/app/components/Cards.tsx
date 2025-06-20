import Link from 'next/link';
import React from 'react'
const icons = [
  { img: "icon.svg", name: "Funcionários", link: "/Funcionario" },
  { img: "icon1.svg", name: "Relatórios", link: "/relatorios" },
  { img: "icon2.svg", name: "Clientes", link: "/clientes" },
  { img: "icon3.svg", name:"Estoque", link:"/Estoque"},
  { img: "icon4.svg", name:"Gerar Relatorio", link:""},
  { img: "icon5.svg", name:"Gerar Relatorio", link:""}
];

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-6 p-8">
      {icons.map((item) => (
        <div key={item.img} className="bg-[#2C2C32] rounded-lg shadow p-4 flex flex-col items-center w-[15.625vw] h-[30vh]">
          <img src={`/${item.img}`} alt={item.name} className="w-[9.948vw] h-[19.1vh] mb-2" />
        <Link href={item.link} className="text-[1.563rem] text-[#ffffff] font-libre font-bold hover:underline">
          {item.name}
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards