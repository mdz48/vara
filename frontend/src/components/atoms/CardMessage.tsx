import style from "../../components/atoms/atoms.module.css"; 
function CardMessage(props: any) {
    return (
    <div id={style.cardMessage}>
        <p id={style.title}>{props.titule}</p>
        <p id={style.description}>{props.description}</p>
    </div>
    );
}

export default CardMessage;