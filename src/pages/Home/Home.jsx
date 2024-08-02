import './Home.css'
import { useState, useEffect } from 'react'

import axios from 'axios'
import aboutText from '../../data/data'
import CardDetail from '../../components/CardDetail/CardDetail'
const Home = () => {
  const [random, setRandom] = useState()

  // GEts the currencies from API
  useEffect(() => {
    axios('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(
      (res) => setRandom(res.data.drinks[0])
    )
  }, [])

  return (
    <div className='Home'>
      <div className='about-sumary'>
        <h2>The Bartender</h2>
        <p>{aboutText[0]}</p>
      </div>
      <div className='random-cocktail'>
        <h2>Random Coctail</h2>
        <CardDetail cocktail={random} />
      </div>
    </div>
  )
}

export default Home
