import React, { useState } from "react";
import Field from "../molecules/Field";
import Label from "../atoms/Label";
import TitleForm from "../atoms/TitleForm";
import CryptoJs from "crypto-js";
import { useDappContext } from "../../Context";
import { useSailsCalls } from "../../app/hooks";
import { useAlert } from '@gear-js/react-hooks';
import { encryptString } from "../../app/utils";
import './Form.css'; // Importamos el archivo CSS

const Form: React.FC = () => {
    const sails = useSailsCalls(); // Using the sails calls
    const alert = useAlert();
    const { setSignlessAccount, setCurrentVoucherId, setNoWalletSignlessAccountName } = useDappContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const login = async () => {
        if (!sails) {
            alert.error('Sails is not available.');
            return;
        }

        setLoading(true);
        const encryptedPassword = CryptoJs.AES.encrypt(password, "regiber").toString();
        alert.info('Logging in...');

        try {
            // Create an object for the query
            const params = {
                email: email,
                password: encryptedPassword
            };

            // Adjust your query to fit the expected format
            const response = await sails.query('User/login', { callArguments: [params] }); // Adjust endpoint as necessary
            
            if (response.success) {
                alert.success('Logged in successfully!');
                // Handle successful login
                const encryptedName = encryptString(email);
                setSignlessAccount(response.account);
                setNoWalletSignlessAccountName(encryptedName);
                setCurrentVoucherId(response.voucherId);
            } else {
                alert.error('Login failed!');
            }
        } catch (error: any) {
            alert.error('Error during login: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form-container">
            <div className="form-header">
                <TitleForm title="Iniciar sesión" />
            </div>
            <Field text={"Email"} val={email} fnval={setEmail} />
            <Field text={"Password"} val={password} fnval={setPassword} />
            <div className="form-actions">
                <div className="form-bottom">
                    <Label text="¿Aun no tienes una cuenta?" />
                    <button onClick={() => login()} className="login-button">
                        Logear
                    </button>
                    <label className="register-label">
                        <a href={'./Register'}>
                            Registarte
                        </a>
                    </label>
                </div>
            </div>
        </form>
    );
};

export default Form;
