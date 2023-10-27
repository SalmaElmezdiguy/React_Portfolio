import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {LiaFacebookMessenger} from 'react-icons/lia'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7tgyepb', 'template_5r4c1nm', form.current, 'a5ycN-7uryL0UUyjg')
    console.log("Ceci est un message de débogage.");

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className=" container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail/>
            <h4>Email</h4>
            <h5>salmaelmezdaguy@gmail.com</h5>
            <a href="mailto:salmaelmezdaguy@gmail.com" target='_blank'>Send a messange</a>
          </article>
          <article className='contact__option'>
            <LiaFacebookMessenger/>
            <h4>Messenger</h4>
            <h5>Any questions</h5>
            <a href="https://m.me/salma.mez/" target='_blank'>Send a messange</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+2127-10627666</h5>
            <a href="https://api.whatsapp.com/send?phone=212710627666" target='_blank'>Send a messange</a>
          </article>
        </div>
        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact