import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditProfile extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      profile_pic: "",
      bio: "",
      history: this.props.history
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
  }


  render() {
    return(
      <div className="ui container">
        <div className="ui middle aligned grid">
          <div className="column">
            <h1 className="ui image header">
              <div className="content">
                Update Your Profile
              </div>
            </h1>
            <form onSubmit={this.onSubmit} className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                <label>Update Username</label>
                  <input onChange={this.onChange} type="text" name="username" placeholder="Username" value={this.state.username} required/>
                </div>
                <div className="field">
                <label>Update Email</label>
                  <input onChange={this.onChange} type="text" name="email" placeholder="Email" value={this.state.email} required/>
                </div>
                <div className="field">
                <label>Description</label>
                  <input onChange={this.onChange} type="text" bio="email" placeholder="Description" value={this.state.email} required/>
                </div>
                <div className="field">
                <label>Profile Picture</label>
                  <input onChange={this.onChange} type="text" name="profile_pic" placeholder="Profile Picture" value={this.state.email} required/>
                </div>



                <div className="field">
                <label>Update Password</label>
                  <input onChange={this.onChange} type="password" name="password" placeholder="Password" value={this.state.password} required/>
                </div>
                <div className="field">
                  <input onChange={this.onChange} type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} required/>
                </div>



                  </div>
                <input className="ui fluid large primary submit button" type="submit" value="Update"/>
            </form>
            </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.user.currentUser
  }
}

export default connect(mapStateToProps)(EditProfile)
