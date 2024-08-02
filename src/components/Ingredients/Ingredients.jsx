import './Ingredients.css'
import React from 'react'

const Ingredients = ({ ingredient, quantity }) => {
  return ingredient ? (
    <li className='ingredient'>
      <p>{ingredient}</p>
      <p>{quantity}</p>
    </li>
  ) : (
    ''
  )
}

export default Ingredients
