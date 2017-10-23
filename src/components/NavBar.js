import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../actions/users'
import { connect } from 'react-redux'

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
  }

  render() {

    const isAuthenticated = this.props.auth;


    const userLinks = (
      <div className="right item">
        <NavLink className="item" to="">Notifications</NavLink>
        <NavLink className="item" to="/profile">Profile</NavLink>
        <a className="item" onClick={this.onClick}>Logout</a>
      </div>
    )

    const guestLinks = (
      <div className="right item">
        <NavLink className="item" to="/login">Log in </NavLink>
        <NavLink className="item" to="/signup">Sign up </NavLink>
      </div>
    )

    return (
      <div className="ui inverted menu">
        <div className="ui container">
          <NavLink className="item" to="/home">Parking App</NavLink>
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
