import style from "../../components/atoms/atoms.module.css"; 
function InputDescription(props: any) {
    const handlerChange = (event: any) => {
    props.fnval(event.target.value);
    };

    return (
      <input 
        id={style.inputDescription} 
        value={props.val} 
        onChange={handlerChange}
      />
    );
  }
  
  export default InputDescription;