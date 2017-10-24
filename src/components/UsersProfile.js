import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ParkingSpotsList from './ParkingSpotsList'
import ReservationsContainer from './reservations/ReservationsContainer'


class Profile extends React.Component {

  render(){
    return(
      <div className="ui container">
          <NavLink to="/addnew"><button className="ui primary button">Add New</button></NavLink>
          <h1>Welcome {this.props.currentUser.username}</h1>




          <h1>Your Listings</h1>
            <ParkingSpotsList spots={this.props.parkingSpots}/>
          <ReservationsContainer/>

          <h1>Your Bookings</h1>
      </div>
    )
  }

}


function mapStateToProps(state){
  return{
    currentUser: state.user.currentUser,
    parkingSpots: state.user.parkingSpots,
    reservations: state.reservations,
    trips: state.user.trips

  }
}


export default connect(mapStateToProps)(Profile)
