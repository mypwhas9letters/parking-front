import React from 'react'
import ParkingSpotsList from './ParkingSpotsList'
import { connect } from 'react-redux'


class Profile extends React.Component {




  // <div class="item">
  //   <div class="ui small image">
  //     <img src="/images/wireframe/image.png">
  //   </div>
  //   <div class="middle aligned content">
  //     <div class="header">
  //       Content A
  //     </div>
  //     <div class="description">
  //       <p></p>
  //     </div>
  //     <div class="extra">
  //       <div class="ui right floated button">
  //         Action
  //       </div>
  //     </div>
  //   </div>
  //
  //
  //   <div className="ui segment smallSize">
  //     <img className="ui smallimg left floated image" src={profileImg} alt=""/>
  //     <h4>{this.props.currentUser.bio}</h4>
  //     <h4>Parking Spaces: {this.props.parkingSpots.length}</h4>
  //     <button className="ui right floated button">Edit</button>
  //   </div>

  render(){
    console.log(this.props);
    const profileImg = this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
    return(
      <div className="ui container">
      <h2>Welcome Back {this.props.currentUser.username}</h2>


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
