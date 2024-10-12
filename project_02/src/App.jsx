import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  //count=0;
  const InCount=()=>{
    if(count<20){
      setCount(count+1)
    }
  }

  const DeCount=()=>{
    if(count>0){
    setCount(count-1);
    }
  }

  return (
    <>
  <h1>React Counter</h1>
  <button onClick={InCount}>Increase {count}</button>
  <br/>
  <br/>
  <button onClick={DeCount} >Decrease {count}</button>

    </>
  )
}

export default App
