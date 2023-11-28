const ErrorExample = () => {
  let number = 0;

  const increaseNumber = () =>
  {
    number = number + 1;
    console.log(number);
  };

  return (
    <div>
      <h2>useState error example</h2>
      <button type="button" onClick={increaseNumber}className="btn">Increase the number by one</button>
      <h2>Number: {number}</h2>
    </div>
  );
};

export default ErrorExample;
