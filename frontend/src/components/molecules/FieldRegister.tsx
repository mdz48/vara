import Label from "../atoms/Label";
import Input from "../atoms/Input";
import './FieldRegister.css'; // Asegúrate de importar el archivo CSS

function FieldRegister(props: any) {
    return (
        <div className="field-register-container">
            <div className="label-container">
                <Label text={props.text} />
            </div>
            <div className="input-container">
                <Input val={props.val} fnval={props.fnval} />
            </div>
        </div>
    );
}

export default FieldRegister;
