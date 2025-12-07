import { useState } from "react";
import './App.css';

// - Simple counter App with increment, decrement and reset functionality.App
// - It also allows user to input custom number to increment or decrement the count by that number.

function App() {
  const [count, setCount] = useState(0);
  const [cusNum, setCusNum] = useState(1);

  return (
    <div className="App">
      <div style={{ marginBottom: '100px' }}>
        <h1>Counter App</h1>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label >input countem number:  </label>
        <input type="number" onChange={(e)=>{
          setCusNum(Number(e.target.value))
          // {console.log("event", e.target.value);}
        }} />
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      <button onClick={() => setCount(count - cusNum)}>Decrement</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + cusNum)}>Increment</button>
      </div>
      <button onClick={()=>{
        setCount(0)
      }}> Reset </button>

    </div>
  );
}

export default App;
