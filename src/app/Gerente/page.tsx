import Sidebar from '../components/Sidebar';
import Header from '../components/HeaderGerente';
import Cards from '../components/Cards';

export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#F3F3F3]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8 w-[79.167vw] h-[13.5vh] bg-[#2C2C32] p-[1vw] rounded-[25px]">
            <h2 className="text-[2.25rem] font-regular text-[#FFFFFF]">
              Olá Gerente <span className="text-[#FFFFFF] font-bold">Paulo!</span>
            </h2>
            <p className="text-[#FFFFFF] mt-[0.5vh] ml-[0.2vw] text-[1rem]">Home - Area Gerente</p>
          </div>
          <Cards />
        </main>
      </div>
    </div>
  );
}