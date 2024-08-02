import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>The Barteder</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor esse
        blanditiis maiores alias quidem, expedita facilis libero omnis
        architecto.
      </p>
      <div className='footer-logos'>
        <a href='#'>
          <img
            className='logo'
            src='/assets/icons8-instagram-48.png'
            alt='Instagram'
          />
        </a>
        <a href='#'>
          <img
            className='logo'
            src='/assets/icons8-twitter-48.png'
            alt='Twitter'
          />
        </a>
        <a href='#'>
          <img
            className='logo'
            src='/assets/icons8-facebook-nuevo-48.png'
            alt='Facebook'
          />
        </a>
      </div>
      <p>
        Using the free <a href='www.thecocktaildb.com'> thecocktaildb</a> api
      </p>
    </div>
  )
}

export default Footer
