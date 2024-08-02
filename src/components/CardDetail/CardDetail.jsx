import Ingredients from '../Ingredients/Ingredients'
import './CardDetail.css'
import React from 'react'

const CardDetail = ({ cocktail }) => {
  if (cocktail) {
    return (
      <div className='card-detail'>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <h2>{cocktail.strDrink}</h2>
        <p className='alcoholic'>{cocktail.strAlcoholic}</p>
        <h3>{cocktail.strGlass}</h3>
        <h4>Ingredients:</h4>
        <ul className='ingredient-container'>
          <Ingredients
            ingredient={cocktail.strIngredient1}
            quantity={cocktail.strMeasure1}
          />
          <Ingredients
            ingredient={cocktail.strIngredient2}
            quantity={cocktail.strMeasure2}
          />
          <Ingredients
            ingredient={cocktail.strIngredient3}
            quantity={cocktail.strMeasure3}
          />
          <Ingredients
            ingredient={cocktail.strIngredient4}
            quantity={cocktail.strMeasure4}
          />
          <Ingredients
            ingredient={cocktail.strIngredient5}
            quantity={cocktail.strMeasure5}
          />
          <Ingredients
            ingredient={cocktail.strIngredient6}
            quantity={cocktail.strMeasure6}
          />
          <Ingredients
            ingredient={cocktail.strIngredient7}
            quantity={cocktail.strMeasure7}
          />
          <Ingredients
            ingredient={cocktail.strIngredient8}
            quantity={cocktail.strMeasure8}
          />
          <Ingredients
            ingredient={cocktail.strIngredient9}
            quantity={cocktail.strMeasure9}
          />
          <Ingredients
            ingredient={cocktail.strIngredient10}
            quantity={cocktail.strMeasure10}
          />
          <Ingredients
            ingredient={cocktail.strIngredient11}
            quantity={cocktail.strMeasure11}
          />
          <Ingredients
            ingredient={cocktail.strIngredient12}
            quantity={cocktail.strMeasure12}
          />
          <Ingredients
            ingredient={cocktail.strIngredient13}
            quantity={cocktail.strMeasure13}
          />
          <Ingredients
            ingredient={cocktail.strIngredient14}
            quantity={cocktail.strMeasure14}
          />
          <Ingredients
            ingredient={cocktail.strIngredient15}
            quantity={cocktail.strMeasure15}
          />
        </ul>
        <h4>How to prepare:</h4>
        <p>{cocktail.strInstructions}</p>
      </div>
    )
  } else {
    return ''
  }
}

export default CardDetail
