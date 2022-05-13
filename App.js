import React, {useState} from 'react';

import './index.css';

function App() {

  //state
  const [weight, setWeight]=useState(0)
  const [height, setHeight]=useState(0)
  const [bmi, setBmi]=useState('')
  const [message, setMessage]=useState('')

  let imgSrc = '';

  let calcBmi= (event) =>
  {
    //prevent submitting

    event.preventDefault()
    if (weight==0 || height==0){
      alert('Please enter a valid weight and height')

    }else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if (bmi<25)
{
  setMessage("You are underWeight");
}else if(bmi>= 25 && bmi<30){
  setMessage("You are healthy weight");
}else{
  setMessage("You are Over Weighted");
}

    }

  }
let reload=() =>{
  window.location.reload()
}

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight(lbm) </label>
              <input value={weight} onChange ={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label>height(inch) </label>
            <input value={height} onChange ={(event) => setHeight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Click me</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>        
          </div>
        
        </form>
        <div className= 'center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>

        </div>
        <div className='img-container'></div>
        <img src = {imgSrc} alt=''></img>
      </div>
    </div>
  );
};

export default App;
