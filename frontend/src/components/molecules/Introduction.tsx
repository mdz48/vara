import './Introduction.css'; // Asegúrate de importar el archivo CSS

function Introduction() {
    return (
        <>
            <div className="introduction-container">
                <div className="introduction-text">
                    <p className="welcome-title">Bienvenidos</p>
                    <p className="welcome-description">
                        Bienvenido a AnonymousComplaint, la plataforma diseñada
                        para recibir denuncias anónimas de forma segura y
                        confidencial. Aquí, podrás reportar situaciones de
                        manera fácil y rápida, sin revelar tu identidad. Nos
                        comprometemos a proteger tu privacidad y asegurar que
                        cada denuncia sea tratada con la seriedad que merece.
                        Tu voz es importante, y este es el espacio donde puedes
                        contribuir a un entorno más justo y transparente, con
                        total discreción.
                    </p>
                </div>
            </div>
            <div className="image-container">
                <img src="signo.png" alt="" className="sign-image" />
            </div>
            <div>
                {/* Aquí puedes añadir más contenido si es necesario */}
            </div>
        </>
    );
}

export default Introduction;
