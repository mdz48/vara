import FormDenunciation from "../molecules/FormDenunciation";
import './FormDenunciationOrg.css'; // Asegúrate de importar el archivo CSS

function FormDenunciationOrg() {
    return ( 
        <>
            <div className="form-denunciation-org">
                <div className="icon-container">
                    <img src="anonimo.png" alt="" className="icon" />
                </div>

                <div className="text-container">
                    <div className="header">
                        <div className="header-title">
                            <p className="title">Realiza tu denuncia</p>
                        </div>

                        <div className="header-category">
                            <h2 className="category-text">Categoría</h2>
                        </div>   
                    </div> 
                </div>
            </div>

            <div className="form-container">
                <FormDenunciation />
            </div>
        </>
    );
}

export default FormDenunciationOrg;
