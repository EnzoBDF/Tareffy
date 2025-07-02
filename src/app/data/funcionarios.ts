export interface Funcionario {
    id: number;
    nome: string;
    cargo: string;
    avatarUrl: string;
  }
  
  export const funcionarios: Funcionario[] = [
    {
      id: 1,
      nome: "Amaral Coelho",
      cargo: "Líder de vendas",
      avatarUrl: "/images/avatar1.png",
    },
    {
      id: 2,
      nome: "Joana Lima",
      cargo: "Desenvolvedora",
      avatarUrl: "/images/avatar2.png",
    },
    {
      id: 3,
      nome: "Carlos Eduardo",
      cargo: "Designer",
      avatarUrl: "/images/avatar3.png",
    },
  ];
  