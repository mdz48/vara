
import FieldName from "../molecules/FieldName";
import FieldRegister from "../molecules/FieldRegister";
import Label from "../atoms/Label";

function FormRegister() {
    



    return (
        <form className="w-[60vh] h-[63vh] bg-[#000000CC] flex-col rounded-lg">
            <div className="flex justify-center items-center mt-9 text-4xl">
                <p className="text-white">Registrate</p>
            </div>
            <div className="w-full h-[25%] flex justify-center items-center">
                <FieldName
                    title={"Primer Nombre"}
                >
                </FieldName>
                <FieldName
                    title={"Segundo nombre"}
                ></FieldName>
            </div>
            
            <div className="mb-2">
                <div className="ml-4">
                    <Label text={"Correo electronico"}></Label>
                </div>
            <FieldRegister>
            </FieldRegister>
            </div>

            <div className="mb-7">
            <div className="ml-4">
                    <Label text={"Contraseña"}></Label>
                </div>
            <FieldRegister>
            </FieldRegister>
            </div>

            <div className="w-full h-[20%] flex justify-center items-center -mt-8">
            </div>
            <button >awea</button>
        </form>
    )
}

export default FormRegister;