import React from 'react'
import './Floatingdiv.css'
const Floating = ({image , txt1 , txt2}) => {
  return (
    <div className='floatingdiv'>
      <img src={image} style={{position: 'relative', right: '7px'}}  alt="" />
      <span>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  )
}

export default Floating
