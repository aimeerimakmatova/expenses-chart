import './App.css';
import{useState} from 'react'

function App() {
  const [ counter, setCounter] = useState(0)

  return (
    <div className="App">
      <button onClick={()=> setCounter( counter+1)}>+</button>
      <h1>counter</h1>
      <button onClick={()=> setCounter(counter-1)}>-</button>
    </div>
  );
}
import { useState } from 'react';

export default App;
