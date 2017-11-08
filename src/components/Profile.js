import React from 'react'
import ParkingSpotsList from './ParkingSpotsList'
import { connect } from 'react-redux'


class Profile extends React.Component {

  render(){
    const profileImg = this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
    return(
      <div className="ui container">
        <h1>Welcome Back {this.props.currentUser.username}</h1>
        <div className="ui segment">
          <div className="ui items">
            <div className="item">
              <div className="ui small image">
                <img src={profileImg} alt=""/>
              </div>
              <div className="middle aligned content">
                <div className="header">
                  {this.props.currentUser.bio}
                </div>
                <div className="description">
                  Parking Spaces: {this.props.parkingSpots.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui segment">
          <h1>Your Listings</h1>
          <ParkingSpotsList spots={this.props.parkingSpots}/>
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
