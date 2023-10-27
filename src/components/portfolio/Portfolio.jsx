import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/noursun.png'
import IMG8 from '../../assets/designweb.png'
import IMG9 from '../../assets/pharmacy2.png'


const data=[
  {
    id:1,
    image: IMG7,
    title:'Cooperative website',
    github:'https://github.com',
    demo:'https://nouresun.site'  },
  {
    id:2,
    image: IMG9,
    title:'Pharmacy Robyy',
    github:'https://github.com/rubbyroby/pharmacy',
    demo: 'https://pharmacy-dun.vercel.app/'  },
    {
      id:2,
      image: IMG8,
      title:'Comming soon',
      github:'https://github.com',
      demo: ''  }
  
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
