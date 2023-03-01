import React from 'react'
import './Intro.css'

import Github from'../../img/github.png'
import LinkedIn from'../../img/linkedin.png'
import Instagram from'../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Thumbup from '../../img/thumbup.png'
import Glassimoji from '../../img/glassesimoji.png'
import Crown from '../../img/crown.png'
import Jas from '../../img/jsrr.png'
import Floating from '../floatingdiv/Floating'
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi!  I Am </span> 
                <span>Jaswant Kumawat </span>
                <span>Frontend Developer with high level of experience in web designing and development , producing the Quality work.</span>
            </div>
            <button className="button i-button" >Hire Me</button>
            <div className="i-icons">
              <a href="https://github.com/jaswantkumawat"><img src={Github} alt="/" /></a>
              <a href="https://www.linkedin.com/in/jaswant-kumawat-902451j/"><img src={LinkedIn} alt="/" /></a>
              <a href="https://www.instagram.com/jasu_jsr/?hl=en"><img src={Instagram} alt="/" /></a>
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Jas} alt="" />
          <img src={Glassimoji} alt="" />
          <div style={{  top: '14rem', left: '23rem'}}>
            <Floating image={Crown} txt1='Web' txt2='Developer' />
          </div>
            <div style={{top: '26rem' , left:'-5rem' , position:'absolute'}}>
              <Floating image={Thumbup} txt1='Best' txt2='Designs'/>
            </div>
            {/*  Blur divs*/}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
          </div>
        </div>
  
  )
}

export default Intro
