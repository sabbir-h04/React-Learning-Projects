import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addCounter = ()=>{
    if (count < 20) {
      setCount(count + 1)
    }
  }
  const removeCounter = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  

  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={addCounter}>Add</button>
    <button onClick={removeCounter}>Remove</button>
    </>
  )
}

export default App
