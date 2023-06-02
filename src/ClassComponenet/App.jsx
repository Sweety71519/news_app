import React, { Component } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
     <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home q="All"/>}></Route>
        <Route path="/Crime" element={<Home q="Crime"/>}></Route>
        <Route path="/Cricket" element={<Home q="Cricket"/>}></Route>
        <Route path="/Politics" element={<Home q="Politics"/>}></Route>
        <Route path="/IPL" element={<Home q="IPL"/>}></Route>
        <Route path="/Entertainment" element={<Home q="Entertainment"/>}></Route>
        <Route path="/Educations" element={<Home q="Educations"/>}></Route>
        <Route path="/Technology" element={<Home q="Technology"/>}></Route>
        <Route path="/Science" element={<Home q="Science"/>}></Route>
        <Route path="/Covid-19" element={<Home q="Covid-19"/>}></Route>
        <Route path="/Jokes" element={<Home q="Jokes"/>}></Route>
     </Routes>
     {/* <Footer/> */}
     </BrowserRouter>
     </>
    )
  }
}
