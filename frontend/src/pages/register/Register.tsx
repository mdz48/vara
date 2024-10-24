import React from "react";
import FormRegister from "../../components/organisms/FormRegister";
import './Register.css'; // Importamos el archivo CSS

const Register: React.FC = () => {
    return (
        <div className="register-container">
            <FormRegister />
        </div>
    );
}

export default Register;
