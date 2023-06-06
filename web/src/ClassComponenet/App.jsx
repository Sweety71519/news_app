import React, { Component } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      language: "hi",
      search: ""
    }
  }
  changeSearch = (data) => {
    console.log("data", data);
    this.setState({ search: data })
  }

  changeLanguage=(data)=>{
    this.setState({language:data})
   }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar changeSearch={this.changeSearch} changeLanguage={this.changeLanguage} />
          <Routes>
            <Route path="/" element={<Home language={this.state.language} search={this.state.search} q="All" />}></Route>
            <Route path="/Crime" element={<Home language={this.state.language} search={this.state.search} q="Crime" />}></Route>
            <Route path="/Cricket" element={<Home language={this.state.language} search={this.state.search} q="Cricket" />}></Route>
            <Route path="/Politics" element={<Home language={this.state.language} search={this.state.search} q="Politics" />}></Route>
            <Route path="/IPL" element={<Home language={this.state.language} search={this.state.search} q="IPL" />}></Route>
            <Route path="/Entertainment" element={<Home language={this.state.language} search={this.state.search} q="Entertainment" />}></Route>
            <Route path="/Educations" element={<Home language={this.state.language} search={this.state.search} q="Educations" />}></Route>
            <Route path="/Technology" element={<Home language={this.state.language} search={this.state.search} q="Technology" />}></Route>
            <Route path="/Science" element={<Home language={this.state.language} search={this.state.search} q="Science" />}></Route>
            <Route path="/Covid-19" element={<Home language={this.state.language} search={this.state.search} q="Covid-19" />}></Route>
            <Route path="/Jokes" element={<Home language={this.state.language} search={this.state.search} q="Jokes" />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}
