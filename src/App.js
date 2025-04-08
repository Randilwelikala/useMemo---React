import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          count - {count};
          
        </h2>
        <h3><button onClick={()=>setCount(count+1)} ></button></h3>
        
          
      </header>
    </div>
  );
}

export default App;
