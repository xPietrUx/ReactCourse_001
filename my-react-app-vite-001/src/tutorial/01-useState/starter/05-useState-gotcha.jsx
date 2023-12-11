import { useState } from "react";

const UseStateGotcha = () => {

  const [gotcha, setGotcha] = useState(0);

  const setFunction = () =>{
    setGotcha((currentState)=>{
      const newState = currentState + 1;
      return newState;
    });  
    console.log(gotcha);
  }

  return(
  <>
    <h4>Show number {gotcha}</h4>
    <button className="btn" onClick={setFunction}>Increase by one</button>
  </>
  );
};

export default UseStateGotcha;
