import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [ counter , setCounter] = useState(15)

  function addValue() {
    let max = 20;
    if (counter == max){
      setCounter(counter = max)
      alert ('max value reached')
    }else{
    counter = counter + 1 
    setCounter(counter)
    }
  }
  function removeValue() {
    if (counter == 0){
      setCounter(counter = 0)
      alert ('number cannot be negative')
    }else{
    counter = counter - 1 
    setCounter(counter)
    }
  }
  return (
    <>
    <h1>  Hello Harry</h1>
    <h2> counter value : {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
