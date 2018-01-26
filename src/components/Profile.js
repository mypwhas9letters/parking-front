import React, { Component } from 'react'
import ParkingSpotsList from './ParkingSpotsList'
import { connect } from 'react-redux'


class Profile extends Component {
  render(){
    const profileImg = this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
    return(
      <div>
      <div className="card">
        <h1>Welcome Back {this.props.currentUser.username}</h1>
          <img src={profileImg} alt="" className="img-thumbnail float-left"/>
          <div className="header">
            {this.props.currentUser.bio}
          </div>
            Parking Spaces: {this.props.parkingSpots.length}
          <button className="primary button">Edit User</button>
          </div>

            <div className="card">
              <div className="card-body">

      <h1>Your Listings</h1>
            <button className="primary button">Add New</button>


          <ParkingSpotsList spots={this.props.parkingSpots}/>
          </div>

          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    parkingSpots: state.user.parkingSpots,
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Profile)
