import React, { Component } from 'react';
import ParkingSpotsList from './ParkingSpotsList';
import { connect } from 'react-redux';
import noImage from '../images/no-image.jpg';

class Profile extends Component {
  render(){
    const profileImg = this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : noImage
    return(
      <div>
        <h1>Welcome Back {this.props.currentUser.username}</h1>
        <div className="card">
          <img src={profileImg} alt="" className="float-left" width="200px"/>
          {this.props.currentUser.bio}
          Parking Spaces: {this.props.parkingSpots.length}
        </div>
        <h1>Your Listings</h1>
        <div className="card">
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
