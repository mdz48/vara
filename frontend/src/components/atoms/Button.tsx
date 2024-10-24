

function Button(props: any) {
    return(
        <button className="w-[90%] h-10 bg-[#48A2E7CC] rounded-sm text-white" onClick={props.onClick}>
            <p className="color-white">
                Agregar
            </p>
        </button>
    )
}

export default Button; 