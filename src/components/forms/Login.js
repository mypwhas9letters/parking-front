import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/users';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "hui",
      password: "123",
      history: this.props.history
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return(
      <div className="container text-center pageMargin card">
        <h1 className="boldBlueText card-body">Log Into Your Account</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username} required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password} required/>
          </div>
          <button type="submit" className="btn btn-primary blue btn-block" value="Log In">Log In</button>
        </form>
        <div className="card-body">New User?
          <NavLink className="item" to="/signup"> Sign Up</NavLink>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
