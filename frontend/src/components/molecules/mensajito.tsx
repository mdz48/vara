import CardMessage from "../atoms/CardMessage";
function Mensajito() {
    return ( 
        <>
        <div className="flex justify-center">
        <p className="text-2xl opacity-60 font-bold">Recuerda, tu denuncia siempre es</p>
        </div>

        <div className="flex justify-center gap-48 mt-10">
            <img src="good.png" alt="" className="h-[30vh]"/>
            <img src="privado.png" alt="" className="h-[30vh]"/>
        </div>

        <div className="flex px-10 justify-center">
        <CardMessage titule={"Libre"}
        description={"Tienes el derecho de denunciar cualquier injusticia o situación irregular sin restricciones. Nuestra plataforma te brinda la libertad de hacerlo de manera sencilla y accesible, garantizando que tu voz sea escuchada."}></CardMessage>
        
        <CardMessage titule={"Privada"}
        description={"Tu seguridad y confidencialidad son nuestra prioridad. Con la denuncia privada, puedes reportar cualquier incidente de forma anónima, asegurando que tu identidad permanezca protegida en todo momento."}></CardMessage>
        </div>
        </>
    );
}

export default Mensajito;