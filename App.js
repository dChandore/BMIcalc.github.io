import React, {useState} from 'react'

import '.index.css'
function App() {

  //state
  const {weight, setWeight}=useState(0)
  const {height, setHeight}=useState(0)
  const {bmi, setBmi}=useState('')
  const {message, setMessage}=useState('')

  let imgSrc = '';

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <from>
          <div>
            <label>weight(lbm) </label>
            <input value={weight}> </input>
          </div>
          <div>
            <label>height(inch) </label>
            <input value={height}></input>
          </div>
          <div>
            <button className='btn' type='submit'></button>
            <button className='btn btn-outline' type='submit'></button>        
          </div>
        
        </from>
        <div className= 'center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>

        </div>
        <div className='img-container'></div>
        <img src = {imgSrc} alt=''></img>
      </div>
    </div>
  );
}

export default App;
