import React from 'react'
import About from './About'
import Carusel from './Carusel'
import Home from './Home'
import Navbar from './Navbar'
import Product from './Product'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
      <Carusel/>
    </div>
  )
}

export default App
