import './Card.css'
import React from 'react'

const Card = ({ drink }) => {
  if (drink) {
    return (
      <div className='card flip'>
        <span className='hidden'>{drink.idDrink}</span>
        <div className='front'>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
        <div className='back'>
          <h2>{drink.strDrink}</h2>
        </div>
      </div>
    )
  } else {
    return ''
  }
}

export default Card
