import CardMessage from "../atoms/CardMessage";
import './Mensajito.css'; // Asegúrate de importar el archivo CSS

function Mensajito() {
    return (
        <>
            <div className="text-center">
                <p className="message-title">Recuerda, tu denuncia siempre es</p>
            </div>

            <div className="image-container">
                <img src="good.png" alt="" className="image" />
                <img src="privado.png" alt="" className="image" />
            </div>

            <div className="card-container">
                <CardMessage 
                    titule={"Libre"}
                    description={"Tienes el derecho de denunciar cualquier injusticia o situación irregular sin restricciones. Nuestra plataforma te brinda la libertad de hacerlo de manera sencilla y accesible, garantizando que tu voz sea escuchada."}
                />
                
                <CardMessage 
                    titule={"Privada"}
                    description={"Tu seguridad y confidencialidad son nuestra prioridad. Con la denuncia privada, puedes reportar cualquier incidente de forma anónima, asegurando que tu identidad permanezca protegida en todo momento."}
                />
            </div>
        </>
    );
}

export default Mensajito;
