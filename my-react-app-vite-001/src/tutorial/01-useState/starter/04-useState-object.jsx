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
const [person, setPerson] = useState({
  name: 'Peter',
  age: 24,
  hobby: 'Read books'
});

const displayPerson = () => {
  setPerson({name: 'John', age: 28, hobby: 'Scream at the computer'});
/*
  Overwritting
  setPerson({...person, name: 'Susan'});
*/
}

return(
<>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.hobby}</h3>
  <button className='btn' onClick={displayPerson}>Show John</button>
</>)
};

export default UseStateObject;
