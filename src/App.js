import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import PageNotFound from './pages/PageNotFound'
import Layout from './component/Layout'
import '@fontsource/roboto/400.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
