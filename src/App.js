import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const numberList = new Array(100000).fill(0).map((_,index)=>{
  return{
    id: index,
    isSelected: index===999999,
  }
});

console.log(numberList);

function App() {

  // var numberList = new Array(10000000);
  // numberList.fill(0);
  // console.log(numberList);

  const [count,setCount] = useState(0);

  const selecterItem = numberList.find((number)=>{
    return number.isSelected
  });

  // const newNumberList = numberList.map((_,index)=>{
    
  //     return {
  //       id: index,
  //       isSelected:index === 9999
      
  //   }
  // });

  // console.log(newNumberList);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          count - {count};
          <br/>
          Selected Item = {selecterItem.id}
          
        </h2>
        <h3><button onClick={()=>setCount(count+1)} >" + "</button></h3>
        
          
      </header>
    </div>
  );
}

export default App;
