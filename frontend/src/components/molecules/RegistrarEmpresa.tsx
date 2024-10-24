import LabelForms from "../atoms/labelForms";
import './RegistrarEmpresa.css'; // Asegúrate de importar el archivo CSS

function RegisterEmpresa() {
    return ( 
        <>
            <section className="register-section"> 
                <div className="register-content">
                    <div className="header">
                        <div className="header-title">
                            <p className="title">Registrar empresa</p>
                        </div>

                        <div className="header-description">
                            <p>Ingrese los datos de la empresa para registrarlo en el sistema.</p>
                        </div>
                    </div> 

                    <div className="input-group">
                        <div className="input-item">
                            <LabelForms labelform={"Nombre de la empresa"} />
                            <input type="text" className="input-field" />
                        </div>
                        <div className="input-item">
                            <LabelForms labelform={"Código postal"} />
                            <input type="text" className="input-field" />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-item">
                            <LabelForms labelform={"Nombre del dueño de la empresa"} />
                            <input type="text" className="input-field" />
                        </div>
                        <div className="input-item">
                            <LabelForms labelform={"Horario de servicio"} />
                            <input type="text" className="input-field" />
                        </div>
                    </div>

                    <div className="input-item full-width">
                        <LabelForms labelform={"Ubicación de la empresa"} />
                        <input type="text" className="input-field" />
                    </div>

                    <button className="submit-button">Agregar empresa</button>
                </div>

                <div className="image-container">
                    <img src="edificio.png" alt="Empresas" className="image" />
                </div>
            </section>
        </>
    );
}

export default RegisterEmpresa;
