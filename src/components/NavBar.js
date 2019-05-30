import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import { logoutUser } from '../actions/users';

class NavBar extends Component{
  state = {
    loggedIn: this.props.auth
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.logoutUser()
    window.location.href = ("/")
  }

  render() {
    const isAuthenticated = this.props.auth;
    const userLinks = (
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/home">Home</Link>
        <Link className="nav-item nav-link" to="/UsersDashboard">Profile</Link>
        <div className="nav-item nav-link" onClick={this.onClick}>Logout</div>
      </div>
    );
    const guestLinks = (
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/login">Log In </Link>
        <Link className="nav-item nav-link" to="/signup">Sign Up </Link>
      </div>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark blue">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="50" height="50" alt=""/>
          </Link>
          <Link className="nav-item nav-link" to="/home">
            <h1 className="navLinkTitle">Parallel</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
           { isAuthenticated ? userLinks : guestLinks }
         </div>
       </div>
      </nav>
    );
  }
}

function mapStateToProps( { user } ) {
  return {
    auth: user.loggedIn
  };
}

export default connect(mapStateToProps, { logoutUser })(NavBar);
