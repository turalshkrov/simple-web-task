import { useState } from 'react';
import icon from "./assets/user-solid.svg";
import './App.css';

function App() {
  const [data, setData] = useState({name: "", description: "", number: ""})

  const changeHandler = (e) => {
    setData(data => ({
      ...data,
      [e.target.id] : e.target.value
    }))
    console.log(data);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h1 id="title">Page Title</h1>
      <form onSubmit={submitHandler}>
        <input 
          id='name' 
          type='text' 
          placeholder='Name'
          value={data.name}
          onChange={changeHandler}/>
        <input 
          id='description' 
          type='text' 
          placeholder='Description'
          value={data.description}
          onChange={changeHandler}/>
        <input 
          id='number'
          type='number' 
          placeholder='Max People'
          value={data.number}
          onChange={changeHandler}/>
      <div id='card'>
        <img src={icon} id='icon'/>
        <div className="card-info">
          <p className="name">name: {data.name}</p>
          <p className="description">description: {data.description}</p>
        </div>
          <p className="number">max people: {data.number}
            <img src={icon} id='num-icon'/>
          </p>
      </div>
      <button className='submit-btn' type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
