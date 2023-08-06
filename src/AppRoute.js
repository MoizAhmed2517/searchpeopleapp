import React from 'react'

// Plugins
import { Routes, Route } from 'react-router';
import Navbar from './components/header/Navbar';
import Main from './layout/Main';

const AppRoute = () => {
  return (
    <Routes>
        <Route exact path='/' element={<><Navbar /> <Main/> </>} />
    </Routes>
  )
}

export default AppRoute