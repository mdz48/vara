import FieldName from "../molecules/FieldName";
import FieldRegister from "../molecules/FieldRegister";
import Label from "../atoms/Label";
import './FormRegister.css'; // Asegúrate de importar el archivo CSS

function FormRegister() {
    return (
        <form className="form-register">
            <div className="form-header">
                <p className="form-title">Regístrate</p>
            </div>
            <div className="name-fields">
                <FieldName title={"Primer Nombre"} />
                <FieldName title={"Segundo nombre"} />
            </div>

            <div className="email-field">
                <div className="label-container">
                    <Label text={"Correo electrónico"} />
                </div>
                <FieldRegister />
            </div>

            <div className="password-field">
                <div className="label-container">
                    <Label text={"Contraseña"} />
                </div>
                <FieldRegister />
            </div>

            <div className="form-footer">
                <button className="submit-button">Enviar</button>
            </div>
        </form>
    )
}

export default FormRegister;
