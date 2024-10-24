import './Header.css'; // Asegúrate de importar el archivo CSS

function Header() {
    return (
        <>
            <header className="header">
                <p className="header-text">Oficiales</p>
                <p className="header-text">Puntos de denuncia</p>

                <div className="header-actions">
                    <p className="header-link"><a href={"./"}>Iniciar sesión</a></p>
                    <p className="register-button"><a href={'./Register'}>Registrarse</a></p>
                </div>
            </header>
        </>
    );
}

export default Header;
