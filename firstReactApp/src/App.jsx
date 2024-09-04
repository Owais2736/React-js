import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import "./index.css"



function App() {

  return (
    <>
      <Navbar />

      <div className="cards">
        <Card title = "Card 1" discription = "This a card for use"/>
        <Card title = "Card 2" discription = "This a card for use"/>
        <Card title = "Card 3" discription = "This a card for use"/>
        <Card title = "Card 4" discription = "This a card for use"/>
        <Card title = "Card 5" discription = "This a card for use"/>
        <Card title = "Card 6" discription = "This a card for use"/>
        <Card title = "Card 7" discription = "This a card for use"/>
        <Card title = "Card 8" discription = "This a card for use"/>
      </div>

      <Footer />

    </>
  )
}

export default App
