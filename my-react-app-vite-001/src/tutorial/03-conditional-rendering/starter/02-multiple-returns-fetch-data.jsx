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
        const users = await response.json();
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

  return (
    <div>
      <img src={users.avatar_url} alt={users.name} />
      <h2>{users.name}</h2>
    </div>
  );
};
export default MultipleReturnsFetchData;
