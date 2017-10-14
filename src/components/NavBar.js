import React from 'react'
import { NavLink } from 'react-router-dom'


class NavBar extends React.Component{
  render() {
    return (
      <div className="ui inverted menu">
        <div className="ui container">
          <NavLink className="item" to="/">Parking App</NavLink>
          <div className="right item">
            <NavLink className="item" to="/login">Log in </NavLink>
            <NavLink className="item" to="/signup">Sign up </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
