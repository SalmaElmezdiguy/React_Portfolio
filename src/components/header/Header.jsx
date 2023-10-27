import React from 'react'
import './header.css'
import CTA from './CTA'
import me from './me.jpeg'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hi ! Hi ! I'm </h5>
      <h1>Salma Elmezdiguy</h1>
      <h5 className='text-light'>Fullstack Developper</h5>
      <CTA/>
      <HeaderSocials/>
      <div className='me'>
        <img src={me} alt="My Image" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header
