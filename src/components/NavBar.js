import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { logoutUser } from '../actions/users'


// render() {
//   const { isAuthenticated } = this.props.auth;
//
//   const userLinks = (
//     <ul className="nav navbar-nav navbar-right">
//       <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      // <NavLink className="item" to="/login">Log in </NavLink>
      // <NavLink className="item" to="/signup">Sign up </NavLink>
//     </ul>
//   );
//
//   const guestLinks = (
//     <ul className="nav navbar-nav navbar-right">
        // <NavLink className="item" to="/login">Log in </NavLink>
        // <NavLink className="item" to="/signup">Sign up </NavLink>
//     </ul>
//   );

class NavBar extends React.Component{

  onClick = (event) => {
    event.preventDefault()
    logoutUser()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="ui inverted menu">
        <div className="ui container">
          <NavLink className="item" to="/">Parking App</NavLink>
          <div className="right item">
            <NavLink className="item" to="/profile">Profile</NavLink>
            <NavLink className="item" to="/login">Log in </NavLink>
            <NavLink className="item" to="/signup">Sign up </NavLink>
            <a className="item" onClick={this.onClick}>Logout</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
