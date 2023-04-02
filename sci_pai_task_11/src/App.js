
import './App.css';
import { api } from './api/random_data';
import React, { useState, useRef } from 'react';
import EasyDataDisplay from './components/EasyDataDisplay';

function App() {
  const [category, setCategory] = useState('users');
  const [error,setError] = useState(null);
  const [data,setData] = useState(null);

  const numDataRef = useRef(null);

  const handleCategoryChange = (event) => {setCategory(event.target.value);};

  const handleSubmit = (event) => {
    setError();
    setData();
    event.preventDefault();
    api(category,numDataRef.current.value)
        .then(response =>{  
          if(response.data["message"]){
            setError(response.data);
          }else{
            const data = Array.isArray(response.data) ? response.data : [response.data];
            setData({name:category, data: data});}
          }      
          )
        .catch(error => setError(error));
  };

  return (
    <div id="app">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Category:</p>
          <select value={category} onChange={handleCategoryChange}>
            <option value="users">Users</option>
            <option value="addresses">Address</option>
            <option value="appliances">Appliances</option>
            <option value="beers">Beers</option>
            <option value="credit_cards">Credit Cards</option>
            <option value="blood_types">Blood Types</option>
            <option value="error">404 error</option>
          </select>
        </label>
        <label>
          <p>How many:</p>
          <input type="number" min="1" step="1" defaultValue="1" ref={numDataRef} />
        </label>
        <button type="submit">Send</button>
      </form>
    <div id="response_data" >
      {!error && !data && <h2>Start by selecting category and sending request!</h2>}
    {error && <h2 style={{color:'red'}}>{error?.message}</h2>}
    {data && EasyDataDisplay(data)}
    </div>      
    </div>
  );
}

export default App;