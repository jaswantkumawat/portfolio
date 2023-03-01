import React from 'react'
import './Card.css'
const Card = ({emoji , heading , detail}) => {
  return (
   <div className="card">
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span style={{fontSize: "17px", marginTop: "35px"}}>{detail}</span>
    <button className="c-button">Learn More</button>
    {/*  Blur divs*/}
    <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
   </div>
  )
}

export default Card
