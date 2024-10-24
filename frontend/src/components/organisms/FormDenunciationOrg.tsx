import FormDenunciation from "../molecules/FormDenunciation";

function FormDenunciationOrg() {
    return ( 
        <>
    <div className="flex justify-center items-center gap-5">
            <div className="">
                <img src="anonimo.png" alt="" className="h-14"/>
            </div>

        <div>
            <div>
                <div className="flex justify-center text-3xl font-semibold mt-12">
                <p>Realiza tu denuncia</p>
            </div>

            <div className="flex justify-center">
                <h2 className="text-2xl font-light">Categoria</h2>
            </div>   


            </div> 
        </div>
    </div>
                <div className="flex justify-center pt-8">
                    <FormDenunciation></FormDenunciation>
                </div>

        </>
     );
}

export default FormDenunciationOrg;