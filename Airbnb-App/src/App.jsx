import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App () {
  const cardInfo = data.map(user => {
    return <Card 
    img = {user.coverImg}
    rating = {user.stats.rating}
    reviewCount = {user.stats.reviewCount}
    country = {user.location}
    title = {user.title}
    price = {user.price}
    openSpots = {user.openSpots}
    />
  })

  return (
    <div className="app-container">
      <Nav />
      <Hero />
      <section className="cards-list">
        {cardInfo}
      </section>
    </div>
  )
}

export default App;