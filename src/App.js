import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const numberList = new Array(25000000).fill(0).map((_,index)=>{
  return{
    id: index,
    isSelected: index===20000000,
  }
});

// console.log(numberList);

function App() {

  // var numberList = new Array(10000000);
  // numberList.fill(0);
  // console.log(numberList);

  const [newNumberList] = useState(numberList);

  const [count,setCount] = useState(0);

  const selectedItem = useMemo(() => newNumberList.find((number)=>number.isSelected),[newNumberList]);
 

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
          Selected Item = {selectedItem.id}          
        </h2>

        <h2>
          <button onClick={()=>setCount(count+1)} ><h3>" + "</h3></button>
          </h2>
        
          
      </header>
    </div>
  );
}

export default App;
