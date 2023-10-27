import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/rabab-sadouk-46a1b615b/" target={'_blank'}><BsLinkedin/></a>  
      <a href="https://github.com/rubbyroby" target={'_blank'}><FaGithub/></a>
      <a href="https://dribbble.com/robynson?onboarding=true" target={'_blank'}><FiDribbble/></a>  
  
    </div>
  )
}

export default HeaderSocials