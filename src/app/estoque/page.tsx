import TitleBar from '../components/TitleBar';
import HeaderWithSidebar from '../components/HeaderWithSidebar';

export default function Estoque(){
    return(
        <div className="bg-[#f3f3f3]">
            <HeaderWithSidebar>
                <TitleBar role="gerente" name="Paulo" subtitle="Home - Área Gerente" showButtons= {true}/>
            </HeaderWithSidebar>
         
        </div>
    )
}