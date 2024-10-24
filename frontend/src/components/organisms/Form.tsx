import Field from "../molecules/Field";
import { useState } from "react";
import Label from "../atoms/Label";
import TitleForm from "../atoms/TitleForm";
import CryptoJs from "crypto-js";
import { useDappContext } from "../../Context";
import { useSailsCalls } from "../../app/hooks";
import { useAlert } from '@gear-js/react-hooks';
import { encryptString } from "../../app/utils";

function Form() {
    const sails = useSailsCalls(); // Using the sails calls
    const alert = useAlert();
    const { setSignlessAccount, setCurrentVoucherId, setNoWalletSignlessAccountName } = useDappContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
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
        <form className="w-[60vh] h-[58vh] bg-[#000000CC] flex-col rounded-lg">
            <div className="w-full h-1/4 flex justify-center items-center">
                <TitleForm
                    title="Iniciar sesión"
                ></TitleForm>
            </div>
            <Field
                text={"Email"}
                val={email}
                fnval={setEmail}
            >
            </Field>
            <Field
                text={"Password"}
                val={password}
                fnval={setPassword}
            >
            </Field>
            <div className="w-full h-[35%] flex items-center justify-center flex-col">
                <div className="w-full h-1/2 flex justify-center items-end">
                </div>
                <div className="w-full h-1/2 flex justify-center items-center">
                    <Label text="¿Aun no tienes una cuenta?">
                    </Label>
                    <button onClick={() => login()} className="w-[80%] h-3/4 bg-red-200">
                        Logear
                    </button>                    
                    <label className="p-2 text-red-400">
                        <a href={'./Register'}>
                            Registarte
                        </a>
                    </label>

                </div>

            </div>
        </form>
    )
}

export default Form; 