import { useState } from 'react';
import './style/style.scss';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='counter-cover'>
      <div className='counter-container'>
        <div>
          <h1>Counter App</h1>
        </div>
        <div>
          <h2>{count}</h2>
        </div>
        <div>
          <button
            className='counter-btn increment-btn'
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className='counter-btn decrement-btn'
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button className='counter-btn reset-btn' onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
