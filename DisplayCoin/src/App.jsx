import { useState, useEffect } from "react"
import Table from "./components/Table"
import { value } from "./context/context"

function App() {

  const API_KEY = "73ee7bee8c145943afdd39e85c718757"
  const [data, setdata] = useState(null)

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) =>
        response.json()
      ).then((convertJson) => {
        console.log("hello", convertJson);
        setdata(convertJson)
      })
  }, [])

  return (
    <>
      <value.Provider value={{ data, setdata }}>
        <Table />
      </value.Provider>
    </>
  )
}
export default App
