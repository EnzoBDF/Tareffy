import { FaSearch, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#2C2C32] text-white border-b-2 px-6 py-3 flex items-center justify-between w-full shadow-md sticky top-0 z-50">
      {/* Esquerda: Logo + Avatares + ícone */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold">TAREFFY</h1>

        <div className="flex -space-x-2">
          <Image
            src="/avatars/avatar1.png"
            alt="Avatar 1"
            width={24}
            height={24}
            className="rounded-full border-2 border-white bg-yellow-400"
          />
          <Image
            src="/avatars/avatar2.png"
            alt="Avatar 2"
            width={24}
            height={24}
            className="rounded-full border-2 border-white bg-yellow-500"
          />
          <Image
            src="/avatars/avatar3.png"
            alt="Avatar 3"
            width={24}
            height={24}
            className="rounded-full border-2 border-white bg-yellow-600"
          />
        </div>

        <div className="w-[1px] h-6 bg-gray-500" />

        <FaUserCircle className="text-xl" />
      </div>

      {/* Centro: Barra de pesquisa */}
      <div className="flex items-center bg-white text-black rounded-md px-3 py-1 w-1/3 max-w-md">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Pesquise Aqui sua tarefa"
          className="w-full bg-transparent outline-none text-sm p-1"
        />
      </div>

      {/* Direita: Cargo + status */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">Gerente</span>
        <div className="w-3 h-3 rounded-full bg-gray-400" />
      </div>
    </header>
  );
};

export default Header;
