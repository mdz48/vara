import LabelForms from "../atoms/labelForms";
function FormDenunciation() {
    return ( 
    <>    
        <form className="bg-[#fff] w-[90vh] p-6 shadow-[2px_2px_14px_-2px_rgba(0,0,0,0.26)]">
    <h1 className="text-[2.5vh] font-semibold text-[#00000074] text-center py-4">Datos de la denuncia</h1>
  
    <div className="flex flex-col gap-y-3">
    <div className="flex flex-col">
        <LabelForms labelform="Ubicación del incidente"></LabelForms>
        <input type="text" className="border-[0.1vh] border-[#0000005b] h-8 w-full mt-2"/>
    </div>

    <div className="flex flex-col">
        <LabelForms labelform="Descripción detallada"></LabelForms>
        <textarea className="border-[0.1vh] border-[#0000005b] h-28 w-full mt-2"></textarea>
    </div>

    <div className="flex flex-col">
        <LabelForms labelform="Seleccione el lugar"></LabelForms>
        <select className="w-full border-[0.3vh] border-[#0000002a]">
            <option value="saddam">Saddam</option>
        </select>
    </div>

    <div className="flex flex-col">
        <LabelForms labelform="Evidencia (opcional)"></LabelForms>
        <input type="file" />
    </div>

    <button className="bg-black text-white w-full p-2 text-[2.2vh]">Enviar denuncia anónima</button>
    </div>
</form>

    </> 
    );
}

export default FormDenunciation;