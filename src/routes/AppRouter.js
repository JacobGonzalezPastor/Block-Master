import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegistroPage from '../pages/RegistroPage';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/registro' element={<RegistroPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter