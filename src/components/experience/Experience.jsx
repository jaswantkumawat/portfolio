import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <div className='exp'>
      <div className="achievement">
        <div className="circle">Fresher</div>
        <span>Eager to gain</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">4+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement" style={{position:"relative" , top:"19px"}}>
        <div className="circle" >0+ </div>
        <span>Work Experience ,</span>
        <span> Willing to join</span>
        <span>organization</span>
      </div>
    </div>
  )
}

export default Experience
