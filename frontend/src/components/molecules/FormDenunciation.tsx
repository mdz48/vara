import LabelForms from "../atoms/labelForms";
import './FormDenunciation.css'; // Asegúrate de importar el archivo CSS

function FormDenunciation() {
    return (
        <>
            <form className="form-denunciation">
                <h1 className="form-title">Datos de la denuncia</h1>

                <div className="form-fields">
                    <div className="field">
                        <LabelForms labelform="Ubicación del incidente" />
                        <input type="text" className="input-text" />
                    </div>

                    <div className="field">
                        <LabelForms labelform="Descripción detallada" />
                        <textarea className="input-textarea"></textarea>
                    </div>

                    <div className="field">
                        <LabelForms labelform="Seleccione el lugar" />
                        <select className="input-select">
                            <option value="saddam">Saddam</option>
                        </select>
                    </div>

                    <div className="field">
                        <LabelForms labelform="Evidencia (opcional)" />
                        <input type="file" />
                    </div>

                    <button className="submit-button">Enviar denuncia anónima</button>
                </div>
            </form>
        </>
    );
}

export default FormDenunciation;
