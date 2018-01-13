import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import logo from '../images/logo.png'
import title from '../images/title.png'
import { logoutUser } from '../actions/users'


class NavBar extends Component{
  constructor(props){
    super(props)

    this.state = {
    loggedIn: this.props.auth
    }
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.logoutUser()
    window.location.href = ("/")
  }

  render() {
    const isAuthenticated = this.props.auth;
    const userLinks = (
      <div className="right item">
        <NavLink className="item" to="/home">Home</NavLink>
        <NavLink className="item" to="/UsersDashboard">Profile</NavLink>
        <a className="item" onClick={this.onClick}>Logout</a>
      </div>
    )
    const guestLinks = (
      <div className="right item">
        <NavLink className="item textSize" to="/login">Log In </NavLink>
        <NavLink className="item textSize" to="/signup">Sign Up </NavLink>
      </div>
    )
    return (
      <div className="ui blue inverted menu">
        <div className="ui container">
          <NavLink className="header item" to="/">
            <img className="logo" src={logo} alt=""/>
          </NavLink>
          <NavLink to="/home"><img className="logoSize" src={title} alt=""/></NavLink>
            { isAuthenticated ? userLinks : guestLinks }
        </div>
      </div>
    )
  }
}

function mapStateToProps( { user } ) {
  return {
    auth: user.loggedIn
  };
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
