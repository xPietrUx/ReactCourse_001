import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {

  const[Tablica, setTablica] = useState(data);

  const removeItem = (id) => {
    //console.log(id);
    const newTablica = Tablica.filter((pearson) => pearson.id !== id)
    setTablica(newTablica); 
  };
  const removeAllItems = () => {
    setTablica([]);
  };

  return( 
  <div>
    <h2>useState array example</h2>
    <ul>
      {Tablica.map((person) => {
        const {id, name} = person;
        //console.log(person)
        return(
          <div key={id}>
          <h4>{name}</h4>
          <button type="button" className="btn" onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
    </ul>
    <button type="button" className="btn" onClick={removeAllItems}>Remove all</button>
  </div>
  );
};

export default UseStateArray;

