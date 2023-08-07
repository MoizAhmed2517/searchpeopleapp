import React from 'react'

// Plugins
import { Routes, Route } from 'react-router';
import Navbar from './components/header/Navbar';
import Main from './layout/Main';
import SignIn from './layout/SignIn';

const AppRoute = () => {
  return (
    <Routes>
        <Route exact path='/' element={<><Navbar /> <Main/> </>} />
        <Route exact path='/login' element={<SignIn />} />
    </Routes>
  )
}

export default AppRoute