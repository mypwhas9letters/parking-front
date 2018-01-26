import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditProfile extends Component {
  constructor(props){
    super(props);

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
      <div className="container pageMargin card">
        <h1 className="boldBlueText text-center">Update Your Profile</h1>
        <form onSubmit={this.onSubmit} className="card-body">
          <div className="form-group">
            <label>Update Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username} required/>
          </div>
          <div className="form-group">
            <label>Update Email</label>
            <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email} required/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description" onChange={this.onChange} value={this.state.description} required/>
          </div>
          <div className="form-group">
            <label>Profile Picture</label>
            <input type="text" className="form-control" name="profile_pic" placeholder="Profile Picture" onChange={this.onChange} value={this.state.profile_pic} required/>
          </div>
          <div className="form-group">
            <label>Update Password</label>
            <input type="text" className="form-control" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password} required/>
            <input type="text" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange} value={this.state.confirmPassword} required/>
          </div>
          <button type="submit" className="btn btn-primary blue btn-block" value="Update">Update</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.user.currentUser
  }
}

export default connect(mapStateToProps)(EditProfile);
