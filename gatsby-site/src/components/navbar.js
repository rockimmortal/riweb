import React from "react"
import PropTypes from "prop-types"
import logo from '../images/Logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';


const navBar = () => (
    <div className="bg-dark">
        <img src={logo} style={{
            display: `block`,
            marginLeft: `auto`,
            marginRight: `auto`,
            width: `25%`,
            paddingBottom: `1px`
        }}/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link mx-3" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mx-3" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mx-3" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link  mx-3" href="#">About</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
  </div>
)

  
export default navBar