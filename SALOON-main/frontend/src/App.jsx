import React from 'react'

import { Routes, Route } from "react-router-dom";

// PAGES
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import GalleryImages from './pages/GalleryImages/GalleryImages';
import Services from './pages/Services/Services'
import Book from './pages/Book/Book'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<GalleryImages/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/book' element={<Book/>}/>
      </Routes>
    </>
  )
}

export default App