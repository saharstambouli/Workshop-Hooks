import React, { useEffect, useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const [timer , setTimer] = useState(0)


  useEffect(()=>{
    console.log("render in useEffect")
  })

  const increment=()=>{
    setCount(count+1)
  }
  const decrement = () => {
    if (count>0) {
        setCount(count-1)
    }
  }
  return (
    <div>
      <h1> Counter </h1>
      <h3> counter time : {timer} </h3>
      <button onClick={decrement}> - </button>
      <h1> {count} </h1>
      <button onClick={increment}> + </button>
    </div>
  );
};
export default Counter;
