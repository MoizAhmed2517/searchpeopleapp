import React from 'react'

// Plugins
import { Routes, Route } from 'react-router';
import Navbar from './components/header/Navbar';
import Main from './layout/Main';
import SignIn from './layout/SignIn';
import Signup from './layout/Signup';

const AppRoute = () => {
  return (
    <Routes>
        <Route exact path='/' element={<><Navbar /> <Main/> </>} />
        <Route exact path='/login' element={<SignIn />} />
        <Route exact path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default AppRoute