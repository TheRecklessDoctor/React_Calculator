import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Keypad} from "./Components/keypad";
import {Screen} from "./Components/screen";
import {useState} from "react";
import {evaluate} from 'mathjs';

function App() {

  // state
  const [btn_val,setBtnVal] = useState('');
  
  // methods
  const btn_click_handler = (e) => {
    console.log(e.target.value);
    if(e.target.value !== "CE"){
      setBtnVal(btn_val+e.target.value);
    }else{
      setBtnVal(''); 
    }
  }

  const equal_btn_handler = (e) => {
    console.log(btn_val);
    const result = evaluate(btn_val);
    console.log(result);
    setBtnVal(result+"");
  }


  return (
    <div className="Main_Container">
      <div className='answer_space w-100 h-25'>
        <Screen val={btn_val}/>
      </div>
      <div className='button_space  w-100 h-75'>
        <Keypad handler = {btn_click_handler} equals_handler = {equal_btn_handler}/>
      </div>

    </div>
  );
}

export default App;
