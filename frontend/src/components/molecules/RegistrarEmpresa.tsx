import LabelForms from "../atoms/labelForms";

function RegisterEmpresa() {
    return ( 
        <>
    <section className="flex justify-around pt-7"> 
        <div className="flex flex-col gap-5">
        <div className="p-10">
            <div className="flex justify-center mt-10">
                <p className="text-[4vh] font-semibold">Registrar empresa</p>
            </div>

            <div className="flex justify-center text-[2.3vh] font-light">
                <p>Ingrese los datos de la empresa para registrarlo en el sistema.</p>
            </div>
        </div> 
    <div className="flex gap-5">
        <div className="flex flex-col">
        <LabelForms labelform={"Nombre de la empresa"}></LabelForms>
        <input type="text" className="border border-gray-300 p-2 w-[400px]" />
        </div>
        <div className="flex flex-col">
        <LabelForms labelform={"Codigo postal"}></LabelForms>
        <input type="text" className="border border-gray-300 p-2 w-[400px]" />
        </div>
    </div>

    <div className="flex gap-5">
        <div className="flex flex-col">
            <div>
            <LabelForms labelform={"Nombre del dueño de la empresa"}></LabelForms>
            </div>
        <input type="text" className="border border-gray-300 p-2 w-[400px]" />
        </div>
        <div className="flex flex-col">
        <LabelForms labelform={"Horario de servicio"}></LabelForms>
        <input type="text" className="border border-gray-300 p-2 w-[400px]" />
        </div>
    </div>

    <div className="flex flex-col">
        <LabelForms labelform={"Ubicación de la empresa"}></LabelForms>
        <input type="text" className="border border-gray-300 p-2 w-[420px]" />
    </div>

    <button className="bg-black text-white w-full py-3 pt-4 text-[2.3vh]">Agregar empresa</button>
    </div>

    <div className="ml-10 flex items-center mt-36">
    <img src="edificio.png" alt="Empresas" className="h-[50vh]" />
    </div>

</section>



        </>
    );
}

export default RegisterEmpresa;