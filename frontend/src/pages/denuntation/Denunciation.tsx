import Header from "@/components/molecules/header";
import FormDenunciationOrg from "@/components/organisms/FormDenunciationOrg";
import './Denuntiation.css'; // Importamos el archivo CSS

const Denuntiation: React.FC = () => {
    return (
        <>
            <Header />
            <div className="denuntiation-container">
                <div className="form-wrapper">
                    <FormDenunciationOrg />
                </div>
            </div>
        </>
    );
}

export default Denuntiation;
