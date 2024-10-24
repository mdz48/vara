import style from "../../components/atoms/atoms.module.css"; 
function LabelForms(props: any) {
    return (
      <label htmlFor={props.htmlFor} id={style.labelForms}>
        {props.labelform}
      </label>
    );
  }
  
  export default LabelForms;