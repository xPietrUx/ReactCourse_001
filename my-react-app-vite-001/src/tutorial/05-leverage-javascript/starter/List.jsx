import { Person } from './Person';
import { people } from '../../../data';

const List = () => {
  return (
    <>
        <ul>
            {   people.map((person, id) => (
                    <Person key={person.id}  {...person}/>
            ))}
        </ul>
    </>
  )
}
export default List