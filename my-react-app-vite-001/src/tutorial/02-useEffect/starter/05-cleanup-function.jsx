import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [value, setValue] = useState(false);

  console.log('render');

  return (
    <>
      <button className="btn" onClick={ () => {setValue(!value)}  }>Toggle</button>

      { value && <RandomComponent/> }
    </>
  );
};

const RandomComponent = () => {
  useEffect(  () => {

    /* const intId = setInterval(  () => {
      console.log('hello from interval');
    }, 1000  );

    return () => {
      clearInterval(intId);
      console.log('cleanup');
    }; */

    const someFunc = () => {

    };

    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);

  }, []);

  return <h1>Something</h1>;
};

export default CleanupFunction;
