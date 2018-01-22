import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import title from '../images/title.png';
import { logoutUser } from '../actions/users';


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
        <Link className="item" to="/home">Home</Link>
        <Link className="item" to="/UsersDashboard">Profile</Link>
        <a className="item" onClick={this.onClick}>Logout</a>
      </div>
    );
    const guestLinks = (
      <div className="right item">
        <Link className="item textSize" to="/login">Log In </Link>
        <Link className="item textSize" to="/signup">Sign Up </Link>
      </div>
    );
    return (
      <div className="ui blue inverted menu">
        <div className="ui container">
          <Link className="header item" to="/">
            <img className="logo" src={logo} alt=""/>
          </Link>
          <Link to="/home"><h1 className="navLinkTitle">Parallel</h1></Link>
            { isAuthenticated ? userLinks : guestLinks }
        </div>
      </div>
    );
  }
}

function mapStateToProps( { user } ) {
  return {
    auth: user.loggedIn
  };
}

export default connect(mapStateToProps, { logoutUser })(NavBar);
