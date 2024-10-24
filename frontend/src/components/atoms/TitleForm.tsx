import style from "../../components/atoms/atoms.module.css"; 
function TitleForm(props: any) {
    return (
      <label id="title-form" className={style.titleForm}>
        {props.title}
      </label>
    );
}

export default TitleForm;