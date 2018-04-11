import React, { Component } from 'react';
import ParkingSpot from './ParkingSpot';
import { connect } from 'react-redux';
import noImage from '../images/no-image.jpg';

class Profile extends Component {
  render(){
    const profileImg = this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : noImage
    const parkingSpotsList = this.props.parkingSpots ? this.props.parkingSpots.map((spots) => <ParkingSpot key={spots.id} spot={spots} />)  : null
    return(
      <div>
        <h1 className="boldBlueText">Welcome Back {this.props.currentUser.username}</h1>
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <img src={profileImg} alt="" className="float-left" width="200px"/>
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="card">
                <div className="card-body">
                  <h4>About Me</h4>
                  <p>{this.props.currentUser.bio}</p>
                  <p>Parking Spaces: {this.props.parkingSpots.length}</p>
                </div>
              </div>
            </div>
          </div>
        <h1 className="boldBlueText">Your Listings</h1>
        <div className="card">
          <div className="row">
            {parkingSpotsList}
          </div>
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
