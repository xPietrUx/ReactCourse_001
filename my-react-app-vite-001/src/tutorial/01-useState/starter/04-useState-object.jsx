import { useState } from 'react';

const UseStateObject = () => {

/*
  const[counter, setCounter] = useState(0); 
 
  const people = [
    {id: 0, name: 'Peter', age: 24, hobby: 'Read books'},
    {id: 1, name: 'John', age: 28, hobby: 'Screams At The Computer'},
  ];

  const increaseCounter = () =>
  {
    setCounter(counter + 1);
  }

  const elementToFind = people.find(element => element.id === counter);

  return (
    <ul>
       <li>{elementToFind?.name}</li> 
       <li>{elementToFind?.age}</li>
       <li>{elementToFind?.hobby}</li>
       <button className='btn' onClick={increaseCounter}>Next person</button>
    </ul>
  ); 
*/

const [name, setName] = useState('Peter');
const [age, setAge] = useState(24);
const [hobby, setHobby] = useState('Read books');

const displayPerson = () => {
  setName('John');
  setAge(28);
  setHobby('Scream at the computer');
}

return(
<>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{hobby}</h3>
  <button className='btn' onClick={displayPerson}>Show John</button>
</>)
};

export default UseStateObject;
