import React from 'react';
import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
const Toggle = () =>{
    const darkmode = () =>{
        
    }
    return(
        <div className="toggle">
            <Sun/>
            <Moon/>
            <div className="t-button" onClick={darkmode}></div>
        </div>
    )
}

export default Toggle;