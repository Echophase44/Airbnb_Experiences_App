import React from "react"
import Star from "../../public/images/star.png"

function Card(props){
  return(
    
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">Sold Out</div>}
      <img className="card--img" src={props.img} alt="Katie Zaferes" />
      <div className="card--content">
        <img className="card--star" src={ Star } />
        <span>{props.rating} </span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card;