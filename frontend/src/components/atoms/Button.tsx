import style from "../../components/atoms/atoms.module.css"; 

function Button(props: any) {
    return(
        <button 
            id={style.button} 
            onClick={props.onClick}
        >
            <p id={style.color}>
                Agregar
            </p>
        </button>
    )
}

export default Button;