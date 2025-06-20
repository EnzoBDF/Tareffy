'use client';

import { FaTh } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItemProps {
  href: string;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ href, label, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-start gap-3 ${
        active ? 'font-bold text-black' : 'text-gray-600 hover:text-black'
      }`}
    >
      <FaTh className="mt-1" />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-56 min-h-screen bg-white p-6 shadow-md">
      <div className="mb-8">
        <h1 className="text-xl text-[#2C2C32] font-bold">TAREFFY</h1>
      </div>

      <nav className="flex flex-col gap-4 text-sm">
        <SidebarItem href="/projetos" label="Projetos" active={pathname === '/projetos'} />
        <SidebarItem href="/Estoque" label="Estoque" active={pathname === '/estoque'} />
        <SidebarItem href="/Gerente" label="Área do gerente" active={pathname === '/gerente'} />

        <SidebarItem href="/filtro" label="Filtro de Tarefas" active={pathname === '/filtro'} />
      </nav>
    </aside>
  );
};

export default Sidebar;
