import Header from "../components/molecules/header";
import RegistrarEmpresa from "../components/molecules/RegistrarEmpresa";

function Empresa() {
    return ( 
        <>
        <div className="h-screen bg-[#ffffff]">
        <Header></Header>
        <RegistrarEmpresa></RegistrarEmpresa>
        </div>
        </>
    );
}

export default Empresa;