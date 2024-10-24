import style from "../../components/atoms/atoms.module.css"; 
function InputName(props: any) {
    const handlerChange = (event: any) => {
      props.fnval(event.target.value);
    };
  
    return (
      <input
        id={style.inputName}
        value={props.val}
        onChange={handlerChange}
      />
    );
  }
  
  export default InputName;