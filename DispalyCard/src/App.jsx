import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./index.css"
import "./app.css"

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {

    let a = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await a.json()

    setCards(data)
    
  }

  useEffect(() => {
    fetchData()
  }, [])




  return (
    <>
      <Navbar />

      <div className="conatiner">
        {cards.map((card) => {
          return <div id={card.id} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By : userId {card.userId}</span>

          </div>

        })}
</div>

      



      <Footer />

    </>
  )
}

export default App
