import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App () {
  return (
    <div className="app-container">
      <Nav />
      <Hero />
      <Card 
        img="../../public/images/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
        />
    </div>
  )
}


export default App;