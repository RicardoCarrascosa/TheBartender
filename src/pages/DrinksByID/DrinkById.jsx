import CardDetail from '../../components/CardDetail/CardDetail'
import axios from 'axios'
import './DrinkByID.css'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const DrinkById = () => {
  const { id } = useParams()
  const [drink, setDrink] = useState()

  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => {
      setDrink(res.data.drinks[0])
    })
  }, [])

  return (
    <div className='drinkbyId'>
      <CardDetail cocktail={drink} />
    </div>
  )
}

export default DrinkById
