import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    // console.log(e.targe.name);
    // console.log(e.targe.value);
    setName(e.targe.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do sth
    console.log(name, email);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
        type="text" 
        id="name" 
        className="form-input" 
        value={name} 
        onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
        type="email" 
        id="name" 
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-block">Submit</button>
    </form>
  );
};
export default ControlledInputs;
