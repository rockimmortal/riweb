import React from "react"
import PropTypes from "prop-types"
import logo from '../images/Logo.png'

import "./comingsoon.css"

class ComingSoon extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="banner">
                Coming Soon!
              </p>
            </header>
          </div>
        )
    }
}
  
export default ComingSoon
  