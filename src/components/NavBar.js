import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions/users'
import { connect } from 'react-redux'
import logo from '../images/logo.png'
import title from '../images/title.png'


class NavBar extends React.Component{

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

function mapStateToProps(state) {
  return {
    auth: state.user.loggedIn,
  };
}

function mapDispatchToProps(dispatch){
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
