import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const[isLoading, setIsLoading] = useState(true);
  const[isError, setIsError] = useState(false);

  const [users, setUsers] = useState(null);

  useEffect(()=>{
    const fetchData = async () => 
    { 
      try 
      {
        const response = await fetch(url);
        if(!response.ok)
        {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const users = await response.json();
        console.log(response);
        setUsers(users);
      } 
      catch (error) 
      {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);
  
  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError)
  {
    return <h2>Error!</h2>
  }
  
  const {avatar_url, name, company, bio} = users;
  
  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};
export default MultipleReturnsFetchData;
