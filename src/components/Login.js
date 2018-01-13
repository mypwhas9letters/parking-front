import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/users'
import { NavLink } from 'react-router-dom'

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
      <div className="ui container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Log Into Your Account
              </div>
            </h2>
            <form onSubmit={this.onSubmit} className="ui large form ">
              <div className="ui stacked segment">
                <div className="field">
                  <input type="text" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username} required/>
                </div>
                <div className="field">
                  <input type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password} required/>
                </div>
                <input className="ui fluid large  submit primary button" type="submit" value="Log In"/>
              </div>
            </form>
            <div className="ui message">New User?
              <NavLink className="item" to="/signup"> Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { login })(Login)
