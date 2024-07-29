import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calculator from './Components/Calculator'
import Navbar from './Components/Navbar'
import Bmi from './Components/Bmi'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Calculator/>}/>
      <Route path='/bmi' element={<Bmi/>}/>
    </Routes>
    </>
  )
}

export default App