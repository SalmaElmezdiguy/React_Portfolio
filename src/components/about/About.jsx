import React from 'react'
import './about.css'
import me from './me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div  className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className='about__content'>
            <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>3 Months</small>
              </article>
              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>3 Worldwide</small>
              </article>
              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>8 Completed</small>
              </article>
            </div>

            <p>
            I am Salma Elmezdiguy, Young graduate in full-stack Development Digital. I am actively developing my skills in full-stack web development ( Im looking for internship opportunity )
            </p>

            <a href="contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About