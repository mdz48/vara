import style from "../../components/atoms/atoms.module.css"; 
function Input(props: any) {
    const handlerChange = (event: any) => {
    props.fnval(event.target.value);
    };

    return (
    <input 
        id={style.input} 
        onChange={handlerChange} 
        value={props.val}
    />
    );
}

export default Input;