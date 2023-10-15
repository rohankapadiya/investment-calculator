import { useState } from "react";
import classes from "./Form.module.css";
function Form(props){

    const initialValues = {
        'current-savings': 10000,
        'yearly-contribution': 2500,
        'expected-return' : 10,
        'duration':12
    };
    const clearData ={
      'current-savings': '',
        'yearly-contribution': '',
        'expected-return' : '',
        'duration':''
    }
    const [inputData,setInputData] = useState(initialValues);
    
    function submitHandler(e){
        e.preventDefault();
        props.onCalculate(inputData);
    }

    function resetHandler(e){
        e.preventDefault();
        setInputData(clearData);
    }

    function inputChangeHandler(input,value){
        setInputData((prevState)=> {return {
            ...prevState,
            [input] : value,
        };}        );
    }
        
        // do something with yearlyData ...
      
    return(
        <form className={classes["form"]} onSubmit={submitHandler}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(e) => inputChangeHandler('current-savings',e.target.value)} 
            value={inputData['current-savings']}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution" >Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(e) => inputChangeHandler('yearly-contribution',e.target.value)}
            value={inputData['yearly-contribution']}  />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return"  onChange={(e) => inputChangeHandler('expected-return',e.target.value)} 
             value={inputData['expected-return']}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(e) => inputChangeHandler('duration',e.target.value)} 
             value={inputData['duration']}/>
          </p>
        </div>
        <p className={classes["actions"]}>
          <button type="reset" onClick={resetHandler} className={classes["buttonAlt"]}>
            Reset
          </button>
          <button type="submit" className={classes["button"]}>
            Calculate
          </button>
        </p>
      </form>
    );
}
export default Form;