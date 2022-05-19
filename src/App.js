import { useState } from "react";
import './style/style.scss'


function App() {
  const[count, setCount] =useState(0);
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-body">
          <h1>Counter App</h1>
          <div>
            <h2>{count}</h2>
            <button className="button1"  
            onClick ={()=> setCount(count+1)}>Increment 
            </button>
            <button className="button2"    
            onClick={()=> setCount(count-1)}>Deccrement 
            </button>
            <button className="button3"  
            onClick={()=> setCount(0)}>Reset 
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
