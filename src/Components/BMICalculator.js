import React, { useState } from 'react'

function BMICalculator() {
    const [age,setAge]=useState(0);
    const [weight,setWeight]=useState(0);
    const [height, setHeight]=useState(0);
    const [bmi,setBmi]=useState();
    function calculate(){

        if (height && weight) {
            const heightInMeters = height / 100; 
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
          } else {
            setBmi(null);
          }
    }
    function reload(){
        setAge(0);
        setHeight(0);
        setWeight(0);
        setBmi(0);
    }
  return (
    <div className='container'>  
      <div className="bmiContainer">
         <h1>BMI Calculator</h1>
         Age: <br />
         <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
         Weight (kg): <br />
         <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} />
         Height (cm):  <br />
         <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)}/>

         <div className="btn">
            <button onClick={calculate}>Calculate</button>
            <button onClick={reload}>Reload</button>
         </div>

         <div className="output">
            <h2>Age: {age}</h2>
            <h2>BMI: {bmi}</h2>
         </div>
      </div>
    </div>
  )
}

export default BMICalculator
