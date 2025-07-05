import { FaSearch, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#2C2C32] text-white px-6 py-3 flex items-center justify-between w-full shadow-md top-0 z-50">
    
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold">TAREFFY</h1>
        <div className="w-[1px] h-7 bg-white" />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-300">Gerente</span>
       <FaUserCircle className="text-xl" />

      </div>
    </header>
  );
};

export default Header;
