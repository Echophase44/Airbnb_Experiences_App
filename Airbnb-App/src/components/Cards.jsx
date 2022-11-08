import React from "react"
import Katie from "../images/katie-zaferes.png"

function Card(){
  return(
    <div className="card">
      <img className="card--img" src={ Katie } alt="Katie Zaferes" />
    </div>
  )
}

export default Card;