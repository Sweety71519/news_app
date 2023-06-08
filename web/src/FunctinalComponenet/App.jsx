import React, { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'

export default function App(){
  let [search,setSearch]=useState("")
  let [language,setLanguage]=useState("hi")
  
  function changeSearch (data){
    console.log("data", data);
    setSearch(data)
  }


  function changeLanguage (data){
    console.log("data", data);
    setLanguage(data)
  }
    return (
      <>
        <BrowserRouter>
          <Navbar changeSearch={changeSearch} changeLanguage={changeLanguage} />
          <Routes>
            <Route path="/" element={<Home language={language} search={search} q="All" />}></Route>
            <Route path="/Crime" element={<Home language={language} search={search} q="Crime" />}></Route>
            <Route path="/Cricket" element={<Home language={language} search={search} q="Cricket" />}></Route>
            <Route path="/Politics" element={<Home language={language} search={search} q="Politics" />}></Route>
            <Route path="/IPL" element={<Home language={language} search={search} q="IPL" />}></Route>
            <Route path="/Entertainment" element={<Home language={language} search={search} q="Entertainment" />}></Route>
            <Route path="/Educations" element={<Home language={language} search={search} q="Educations" />}></Route>
            <Route path="/Technology" element={<Home language={language} search={search} q="Technology" />}></Route>
            <Route path="/Science" element={<Home language={language} search={search} q="Science" />}></Route>
            <Route path="/Covid-19" element={<Home language={language} search={search} q="Covid-19" />}></Route>
            <Route path="/Jokes" element={<Home language={language} search={search} q="Jokes" />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )
  }

