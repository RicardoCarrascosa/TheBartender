import axios from 'axios'
import './Drinks.css'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom'
const filterCat = ['Categories', 'Ingredients', 'Alcoholic', 'Glasses']

const Drinks = () => {
  const [category, setCategory] = useState(filterCat[0])
  const [elements, setElements] = useState([])
  const [element, setElement] = useState(elements[0])
  const [drinks, setDrinks] = useState([])

  //  Load Categories List
  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?${category[0].toLowerCase()}=list`
    ).then((res) => {
      setElements(res.data.drinks)
      setElement(res.data.drinks[0])
    })
  }, [category])

  // Loads Drinks in selected Category
  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${category[0].toLowerCase()}=${element}`
    ).then((res) => {
      setDrinks(res.data.drinks)
    })
  }, [element, category])

  const handleChangeMainFilter = (event) => {
    setCategory(event.target.value)
  }
  const handleChangeSubFilter = (event) => {
    setElement(event.target.value)
  }
  return (
    <div>
      <div className='filter'>
        <h2>Filter By:</h2>
        <select id='mainFilter' onChange={handleChangeMainFilter}>
          {filterCat.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select id='subFilter' onChange={handleChangeSubFilter}>
          {elements.map((ele) => (
            <option key={Object.values(ele)[0]} value={Object.values(ele)[0]}>
              {Object.values(ele)[0]}
            </option>
          ))}
        </select>
      </div>
      <div className='card-container'>
        {drinks ? (
          drinks.map((drink) => (
            <Link to={`/Drinks/${drink.idDrink}`} key={drink.idDrink}>
              <Card drink={drink} />
            </Link>
          ))
        ) : (
          <h2>No element Found</h2>
        )}
      </div>
    </div>
  )
}

export default Drinks
