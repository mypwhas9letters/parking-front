import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signup } from '../../actions/users';

class Signup extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      history: this.props.history
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state)
  }

  render() {
    return(
      <div className="container text-center pageMargin card">
        <h1 className="boldBlueText card-body">Create a New Account</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username} required/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email} required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password} required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange} value={this.state.password} required/>
          </div>
          <button type="submit" className="btn btn-primary blue btn-block" value="Sign Up">Sign Up</button>
        </form>
        <div className="ui message card-body">Existing User?
          <NavLink className="item" to="/login"> Log In</NavLink>
        </div>
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
