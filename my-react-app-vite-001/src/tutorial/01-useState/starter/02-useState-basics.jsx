import { useState } from "react";

const UseStateBasics = () => {

  const [plusOne, setPlusOne] = useState(0);

  const increaseNumber = () =>
  {
    setPlusOne(plusOne + 1);
  }

  return (
    <div>
        <h3>Your number is {plusOne}</h3>
        <button type="button" className="btn" onClick={increaseNumber}>Increase number by one</button>
    </div>
  );
};

export default UseStateBasics;
