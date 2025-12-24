import React, { useReducer, useState } from "react";
 
 function reducer(state,action){
      console.log(state,action );
      return state+action;
 }

function DataCounter() {
   const[count,dispatch]=useReducer(reducer,0);
  // const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Range slider
  function handleRange(e) {
    // setCount(Number(e.target.value));
    dispatch(0)
  }

  // Step input
  function handleStep(e) {
    const val = Number(e.target.value);
    setStep(val > 0 ? val : 1);

    // count ko bhi step ke multiple pe le aana
    // setCount(c => Math.round(c / val) * val);
  }

  // Buttons
  function increment() {
    // setCount(c => Number(c +   step));
    dispatch(1); 
  }

  function decrement() {
     // setCount(c => Number(c - step));
     dispatch(-1)
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="200"
        step={step}
        value={step}
        onChange={handleRange}
      />

      {step}

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      <br /><br />

      <input
        type="text"
        value={count}
        onChange={handleStep}
        placeholder="Step value"
      />
    </div>
  );
}

export default DataCounter;
