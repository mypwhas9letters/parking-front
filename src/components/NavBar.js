import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component{
  render() {
    return (
      <div className="ui inverted menu">
        <div className="ui container">
          <a className="item">Parking App</a>
          <div className="right item">
            <a className="item">Log in </a>
            <a className="item">Sign up </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
