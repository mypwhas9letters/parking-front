import React, { Component } from 'react';
import ParkingSpotsList from './ParkingSpotsList';
import { connect } from 'react-redux';

class Profile extends Component {
  render(){
    const profileImg = this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
    return(
      <div>
        <h1>Welcome Back {this.props.currentUser.username}</h1>
        <div className="card">
          <img src={profileImg} alt="" className="float-left" width="200px"/>
          {this.props.currentUser.bio}
          Parking Spaces: {this.props.parkingSpots.length}
          <button className="btn-primary">Edit User</button>
        </div>
        <div className="card">
          <h1>Your Listings</h1>
          <button className="primary button">Add New</button>
          <ParkingSpotsList spots={this.props.parkingSpots}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }){
  return{
    parkingSpots: user.parkingSpots,
    currentUser: user.currentUser
  }
}

export default connect(mapStateToProps)(Profile);
