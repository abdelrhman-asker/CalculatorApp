import { useEffect, useReducer, useState } from 'react';
import './App.css';



function App() {

  // const [result , setResult] =useState("")
  const [value , setValue] =useState("")
  const [preValue , setPreValue] =useState("0")
  const handleChange = (e) => {
    e.preventDefault();
    setValue("");
  }
    
  
  const handleChangeEquals = (e) => {
   
    try {
      // e.preventDefault();
      setValue(eval(value));
      setPreValue(eval(value))
     
      // console.log(value)

    } catch (error) {
      setValue("Error")
    }
    
  }
  const handleChangeDel = () => {
    try {
      setValue(value.slice(0, -1))
    } catch (error) {
      
    }
  }
  return (
    <div className="CalculatorMain">
      
      <div className='Output'>
        <div className='PreviousResult'>{preValue}</div>
        <div className='CurrentResult'>
        <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        </div>


      </div>
      
      <div className='First-Div'>
      <button className='Span-Two' value="AC" onClick={handleChange} >AC</button>
      <button value="Del"  onClick={handleChangeDel}>DEL</button>
      <button value="/" onClick={(e) => setValue(value + e.target.value)}>/</button>
      </div>
      <div>
      <button
        value="1" onClick={(e) => setValue(value + e.target.value)}
      >1</button>
      <button value="2" onClick={(e) => setValue(value + e.target.value)}>2</button>
      <button value="3" onClick={(e) => setValue(value + e.target.value)}>3</button>
      <button value="*" onClick={(e) => setValue(value + e.target.value)}>*</button>
      </div>
      <div>
      <button value="4" onClick={(e) => setValue(value + e.target.value)}>4</button>
      <button value="5" onClick={(e) => setValue(value + e.target.value)}>5</button>
      <button value="6" onClick={(e) => setValue(value + e.target.value)}>6</button>
      <button value="+" onClick={(e) => setValue(value + e.target.value)}>+</button>
      </div>
      <div>
      <button value="7" onClick={(e) => setValue(value + e.target.value)}>7</button>
      <button value="8" onClick={(e) => setValue(value + e.target.value)}>8</button>
      <button value="9" onClick={(e) => setValue(value + e.target.value)}>9</button>
      <button value="-" onClick={(e) => setValue(value + e.target.value)}>-</button>
      </div>
      <div className='Last-Div'>
      <button value="0" onClick={(e) => setValue(value + e.target.value)}>0</button>
      <button value="." onClick={(e) => setValue(value + e.target.value)}>.</button>
      <button className='Span-Two' value="=" 
      onClick={(e) => handleChangeEquals() }>=</button>
      </div>
      </div>
    
  );
}

export default App;
