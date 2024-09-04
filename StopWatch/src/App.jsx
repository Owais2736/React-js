import { useState, useRef } from 'react'
import './App.css'
import './index.css'

function App() {
  const [Start, setStart] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)

  function handleStart() {
    setStart(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())

    }, 10)

  }

  function handleStop() {
    clearInterval(intervalRef.current)

  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setStart(null);
    setNow(null);
  }

  let second = 0;
  if (Start != null && now != null) {
    second = (now - Start) / 1000
  }

  return (
    <>
      <h1>Passed Time : {second.toFixed(3)}</h1>

      <button className='btn' onClick={handleStart}>Start</button>
      <button className='btn' onClick={handleStop}>Stop</button>
      <button className='btn' onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
