import Label from "../atoms/Label";
import Input from "../atoms/Input";


function FieldRegister(props:any) {
    return (
        <div className="w-full h-[15%]">
            <div className="w-full h-[35%] flex justify-start items-center pl-5">
                <Label
                text={props.text}
                >
                </Label>
            </div>
            <div className="w-full h-[65%] flex items-center justify-center">
                <Input
                    val={props.val}
                    fnval={props.fnval}
                ></Input>
            </div>
        </div>
    )
}

export default FieldRegister; 