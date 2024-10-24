

function InputName(props: any) {

    const handlerChange = (event:any) => {
        props.fnval(event.target.value)
    }

    return( 
        <input  value={props.val} onChange={handlerChange} 
        className="w-[80%] h-8 bg-[#FFFFFF47] rounded-lg text-white">
        </input>
    )
}

export default InputName;