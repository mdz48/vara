

function Input(props: any) {

    const handlerChange = (event: any) => {
        props.fnval(event.target.value);
    }

    return (
        <input className="w-[90%] h-10 bg-[#FFFFFF47] rounded-lg text-white" 
        onChange={handlerChange} value={props.val}></input>
    )
}

export default Input; 