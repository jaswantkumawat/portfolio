import React from 'react'
import './Services.css'
import Heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../cards/Card'
import Resume from '../services/RESUME_.pdf'
const Services = () => {
  return (
    <div className="services">
         {/* left side */}
         <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Currently I am a FrontEnd web developer working with 
                <br />
                 HTML , CSS , JAVASCRIPT , BOOTSTRAP , REACT JS . </span>
                 <a href={Resume} download>
                 <button className="button s-button">Download CV</button>
                 </a>
         </div>
         {/* right side */}
         <div className="cards">
         {/* first card */}
          <div style={{right:"24rem"}}>
            <Card
            emoji = {Heartemoji}
            heading = {'Design'}
            detail = {"I will work soon on these :  Figma ,Sketch ,Photoshop , Adobe , Adobe xd."}
            />
          </div>
           {/* second card */}
           <div style={{top:"17rem" , right:"52rem"}}>
            <Card
            emoji = {Glasses}
            heading = {'Developer'}
            detail = {"HTML , CSS , JavaScript , ReactJS."}
            />
          </div>
          {/* third card */}
          <div style={{top:"26rem" ,right:"28rem"}}>
            <Card
            emoji = {Humble}
            heading = {'UI/UX'}
            detail =  {"I will also work soon on UI and UX "}
            />
          </div>
         </div>
    </div>
  )
}

export default Services
