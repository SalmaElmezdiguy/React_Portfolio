import React from 'react'
import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs' 
import {BsTwitter} from 'react-icons/bs' 


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Salma</a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        {/* <li> <a href="services">Services</a> </li> */}
        <li> <a href="#portfolio">Portfolio</a> </li>
        {/* <li> <a href="#testimonials">Testimonials</a> </li> */}
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/salma.mez"><BiLogoFacebook/></a>
        <a href="https://www.instagram.com/salma.mez"><BsInstagram/></a>
        <a href="https://twitter.com/salmaMez"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Salma elmezdiguy. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer