import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Drinks from './pages/Drinks/Drinks'
import DrinkById from './pages/DrinksByID/DrinkById'
import NotFound from './pages/NotFound/NotFound'
function App() {
  return (
    <>
      <Header />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Drinks' element={<Drinks />} />
          <Route path='/Drinks/:id' element={<DrinkById />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
