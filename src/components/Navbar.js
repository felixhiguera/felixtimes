import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'




const Navbar = () => {
    const { category } = useContext(UserContext)

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark  h4 " style={{ backgroundColor: "#2e9fd4" }}>
                <a class="navbar-brand " href="https://felixhiguera.website/" target="_blank">Felix Times</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav" >
                    <ul class="navbar-nav  h5"  >
                        <li class="nav-item ">
                            <Link class={`nav-link ${category == 'breaking-news' ? 'active' : ''}`} to="/">Breaking-News <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${category == 'sports' ? 'active' : ''}`} to="/sports">Sports</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${category == 'entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${category == 'business' ? 'active' : ''}`} to="/business">Business</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${category == 'health' ? 'active' : ''}`} to="/health">Health</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={`nav-link ${category == 'technology' ? 'active' : ''}`} to="/technology">Technology</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
