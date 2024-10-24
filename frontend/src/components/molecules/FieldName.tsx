import InputName from "../atoms/InputName";
import Label from "../atoms/Label";
import './FieldName.css'; // Asegúrate de importar el archivo CSS

function FieldName(props: any) {
    return (
        <div className="field-name-container">
            <div className="label-container">
                <Label text={props.title} />
            </div>
            <div className="input-container">
                <InputName val={props.val} fnval={props.fnval} />
            </div>
        </div>
    );
}

export default FieldName;
