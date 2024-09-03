import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <div className="container">
        <div className="value"><button style={{ width: 150, backgroundColor: "white", color: "black" }}>{value}</button></div>
        <br />
        <button style={{ backgroundColor: "green", color: "white" }} onClick={() => { setValue(value + 1) }}>Increament 1</button>
        <button style={{ backgroundColor: "red", color: "white" }} onClick={() => { setValue(value - 1) }}>Decreament 1</button>
        <button style={{ backgroundColor: "skyblue", color: "white" }} onClick={() => { setValue(value - value) }}>Reset</button>

      </div>
    </>
  )
}

export default App
