import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/users';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "hui",
      password: "123",
      history: this.props.history
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state)
  }

  render() {
    return(
      <div className="container">
        <h1>Log Into Your Account</h1>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <input type="text" class="form-control" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username} required/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password} required/>
          </div>
          <button type="submit" class="btn btn-primary blue btn-block" value="Log In">Log In</button>
        </form>
        <div className="ui message">New User?
          <NavLink className="item" to="/signup"> Sign Up</NavLink>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
