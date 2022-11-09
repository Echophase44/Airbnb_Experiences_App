import React from "react"
import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"

function Card(){
  return(
    <div className="card">
      <img className="card--img" src={ Katie } alt="Katie Zaferes" />
      <div className="card--content">
        <img className="card--star" src={ Star } />
        <span>5.0 </span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}

export default Card;