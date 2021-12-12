import 'bootstrap/dist/css/bootstrap.css';
function Keypad(props){
    return(
        <div className="button-container h-100 w-100">
            <Button classname='item1 admin_work' btnVal={"("} Click = {props.handler}/>
            <Button classname='item2 admin_work' btnVal={"CE"} Click = {props.handler}/>
            <Button classname='item3 admin_work' btnVal={")"} Click = {props.handler}/>
            <Button classname='item4 operands' btnVal={"%"} Click = {props.handler}/>

            <Button classname='item5 number' btnVal={1} Click = {props.handler}/>
            <Button classname='item6 number' btnVal={2} Click = {props.handler}/>
            <Button classname='item7 number' btnVal={3} Click = {props.handler}/>
            <Button classname='item8 operands' btnVal={"+"} Click = {props.handler}/>

            <Button classname='item9 number' btnVal={4} Click = {props.handler}/>
            <Button classname='item10 number' btnVal={5} Click = {props.handler}/>
            <Button classname='item11 number' btnVal={6} Click = {props.handler}/>
            <Button classname='item12 operands' btnVal={"-"} Click = {props.handler}/>
            
            <Button classname='item13 number' btnVal={7} Click = {props.handler}/>
            <Button classname='item14 number' btnVal={8} Click = {props.handler}/>
            <Button classname='item15 number' btnVal={9} Click = {props.handler}/>
            <Button classname='item16 operands' btnVal={"*"} Click = {props.handler}/>

            <Button classname='item17 number' btnVal={"."} Click = {props.handler}/>
            <Button classname='item18 number' btnVal={0} Click = {props.handler}/>
            <Button classname='item19' btnVal={"="} Click = {props.equals_handler}/>
            <Button classname='item20 operands' btnVal={"/"} Click = {props.handler}/>


        </div>
    )

}


// button component
function Button(props){
    return(
        <button className={props.classname} onClick = {props.Click} value={props.btnVal}>{props.btnVal}</button>
    )
}


export {Keypad};