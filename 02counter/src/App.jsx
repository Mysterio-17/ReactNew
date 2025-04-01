import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(5)

  const addValue = () => {
    setCounter(counter+1)
}
const removeValue = () => {
  if(counter>=1)
  setCounter(counter-1)
  else
  setCounter(counter)
}
  return (
    <>
     <h1>Chai Ur react</h1>
     <h2>counter value :{counter}</h2>

     <button onClick={addValue}>add value{counter}</button>
    <br />
     <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
