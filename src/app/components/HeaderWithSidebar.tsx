import Header from './Header';
import Sidebar from './Sidebar';

interface HeaderWithSidebarProps {
  children: React.ReactNode;
}

export default function HeaderWithSidebar({ children }: HeaderWithSidebarProps) {
  return (
    <div className="flex min-h-screen bg-[#f3f3f3]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
