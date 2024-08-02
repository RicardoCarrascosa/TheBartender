import './About.css'
import React from 'react'
import aboutText from '../../data/data'

const About = () => {
  return (
    <div className='aboutUs'>
      <h2>About Us</h2>
      {aboutText.map((text) => (
        <p key={text[0]}>{text}</p>
      ))}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        dolorem enim provident dolores, ratione voluptatum. Iste laudantium
        ipsam voluptates! Nesciunt dolore totam, doloribus neque illo vitae quo
        dolorem eligendi nobis.
      </p>
    </div>
  )
}

export default About
