import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  var numberList = new Array(1000000);
  numberList.fill(0);
  console.log(numberList);

  const [count,setCount] = useState(0);

  const newNumberList = numberList.map((_,index)=>{
    
      return {
        id: index,
        isSelected:index === 99999
      
    }
  });

  console.log(newNumberList);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          count - {count};
          
        </h2>
        <h3><button onClick={()=>setCount(count+1)} >" + "</button></h3>
        
          
      </header>
    </div>
  );
}

export default App;
