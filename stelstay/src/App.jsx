import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import AdminPage from './pages/AdminPage.jsx'
import UserPage from './pages/UserPage'
import './IntialPage.css'
import MyLoginPage from './views/login'
import { NotFound } from './views/NotFound'
import { Home } from './views/Home'

//This function defines the routes between views and pages for the stelstay webapp

function App () {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AdminPage/*' element={<AdminPage />} />
        <Route path='UserPage/*' element={<UserPage />} />
        <Route path='RegisterPage/*' element={<RegisterPage />} />
        <Route path='/Login' element={<MyLoginPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  )
}

export default App
