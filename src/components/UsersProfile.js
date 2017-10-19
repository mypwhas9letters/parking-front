import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/users'
import ParkingSpotsList from './ParkingSpotsList'



class Profile extends React.Component {

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.getCurrentUser(jwt)
  }

  render(){
    console.log(this.props.reservations);


    return(
      <div className="ui container">
          <NavLink to="/addnew"><button className="ui primary button">Add New</button></NavLink>
          <h1>Welcome {this.props.currentUser.username}</h1>
        <h1>Your Listings</h1>
          <ParkingSpotsList spots={this.props.parkingSpots}/>
          <h1>Your Reservations</h1>

          <h1>Your Trips</h1>

      </div>
    )
  }

}


function mapStateToProps(state){
  return{
    currentUser: state.user.currentUser,
    parkingSpots: state.user.parkingSpots,
    reservations: state.user.reservations,
    trips: state.user.trips

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: (jwt) => {
      dispatch(getCurrentUser(jwt))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
