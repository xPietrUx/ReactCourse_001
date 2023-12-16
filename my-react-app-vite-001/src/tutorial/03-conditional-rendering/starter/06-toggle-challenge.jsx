import { useState } from "react";

const ToggleChallenge = () => {

  const [decision, setDecision] = useState(false);
  
  const ifDecision = () => 
  { 
    if(decision == false)
    {
      setDecision(true);
    }
    else
    {
      setDecision(false);
    }
  }

  return (
    <>
      <h2>Show me, what you got!</h2>
      <button className="btn" 
      onClick={ifDecision}>Show</button>
      {decision && (
        <h1>Suprise!🎉🎈🎊</h1>
      )}
  
      {/* 
      How to do it in master's way
      <button className='btn' onClick={() => setShowAlert(!showAlert)}></button> 
      */}
    </>
  );
};

export default ToggleChallenge;
