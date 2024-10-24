import style from "../../components/atoms/atoms.module.css"; 
function Label(props: any) {
    return (
    <label id={style.label}>{props.text}</label>
    );
  }
  
export default Label;
