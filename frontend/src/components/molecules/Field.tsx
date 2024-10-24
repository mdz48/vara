import Input from "../atoms/Input";
import Label from "../atoms/Label";
import './Field.css'; // Asegúrate de importar el archivo CSS

function Field(props: any) {
    return (
        <div className="field-container">
            <div className="label-container">
                <Label text={props.text} />
            </div>
            <div className="input-container">
                <Input val={props.val} fnval={props.fnval} />
            </div>
        </div>
    );
}

export default Field;
