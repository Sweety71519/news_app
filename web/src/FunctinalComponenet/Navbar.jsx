import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar (props){
    let [search,setSearch]=useState("")
    let [language,setLanguage]=useState("Hindi")

    function GetSelectedLanguage(){
        if(language==="Hindi") {
            document.getElementById("language").innerHTML=language
            setLanguage("English")  
            props.changeLanguage("en")  
        }
        else{
            document.getElementById("language").innerHTML=language
            setLanguage("Hindi")
            props.changeLanguage("hi") 
        }
    }

    function inputData(e){
        setSearch(e.target.value)
    }
    function postData(e){
        e.preventDefault()
        console.log("postData",e);
        props.changeSearch(search)
        setLanguage("")
    }

    return (
        <nav className="navbar navbar-expand-lg background sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" onClick={()=>props.changeSearch("")}  to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" onClick={()=>props.changeSearch("")}  to="/">All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Cricket">Cricket</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Crime">Crime</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Politics">Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/IPL">IPL</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>props.changeSearch("")} to="/Entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Others
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Educations">Educations</Link></li>
                                        <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/Covid-19">Covid-19</Link></li>
                                        <li><Link className="dropdown-item" to="/Jokes">Jokes</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item mt-2">
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" id="language" HtmlFor="flexSwitchCheckDefault">Hindi</label>
                                        <input className="form-check-input" onChange={GetSelectedLanguage} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={postData}>
                                <input className="form-control me-2" name="search" type="search" value={search} placeholder="Search" onChange={inputData} aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
    )
  }
