import React from 'react';
import { useRef } from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

import './Contact.css';
const Contact = () =>{

    const form = useRef();
    const [done,setDone]  = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ch6weuo', 'template_ilihu76', form.current, 'yEzhGECkDgE5_dDZy')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
<div className="contact-form">
    <div className="cont-left">
            <div className="c-left-text">
      <span>Get in Touch</span>
      <br />
        <span >Contact Me</span>
      </div>
        
         </div>
         <div className="cont-right">
            <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user_name' className='user' placeholder='Name' />
        <input type="email" name='user_email' className='user' placeholder='Email' />
        <textarea name='message' className='user' placeholder='Message' />
        <input type="submit" className='button' value="Send" />
        <span>{done && "Thanks for contacting me "}</span>
        </form>
         </div>
    </div>
    );
}

export default Contact;