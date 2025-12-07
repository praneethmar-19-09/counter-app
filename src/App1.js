import { useState } from 'react';
import './App.css';

// It deables buttons at csertain limits. using condential rendering.

export default function App1() {
    const [count, setCount] = useState(0);
    const limit = 10;
    return (
        <div className="App">
      <div style={{ marginBottom: '100px' }}>
        <h1>Counter App</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      <button onClick={() => setCount(count - 1)} disabled={count <= -limit}>Decrement</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} disabled={count >= limit}>Increment</button>
      </div>
      <button onClick={()=>{
        setCount(0)
      }}> Reset </button>

    </div>
    );
}

