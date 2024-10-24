function CardMessage(props: any) {
    return ( 
        <>
        <div className="bg-white pt-5 pb-5 pt-14
        shadow-[2px_10px_14px_-7px_rgba(0,0,0,0.26)]">
            <p className="text-[4.3vh] opacity-65 font-bold px-16">{props.titule}</p>
            <p className="text-[2.2vh] px-16">{props.description}</p>
        </div>
        </>
    );
}

export default CardMessage;