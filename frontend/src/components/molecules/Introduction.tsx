
function Introduction() {
    return (
        <>
            <div className="w-[100%] h-[50vh] 
        bg-[url('introduction.jpg')] bg-no-repeat bg-cover flex items-center justify-center">

                <div className="text-center">
                    <p className="text-4xl text-white -mt-14">Bienvenidos</p>
                    <p className="text-white text-center px-[20vw] mt-2 text-[2.7vh] opacity-90">
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
            <div className="flex justify-center">
                <img src="signo.png" alt="" className="h-44 absolute -mt-20" />
            </div>


            <div>

            </div>
        </>
    );
}

export default Introduction;