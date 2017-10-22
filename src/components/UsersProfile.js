import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchReservations } from '../actions/reservations'
import ParkingSpotsList from './ParkingSpotsList'
import ReservationsList from './reservations/ReservationsList'
import { bindActionCreators } from 'redux'


class Profile extends React.Component {

  componentDidMount(){
    const userID = {id: this.props.currentUser.id}
    this.props.fetchReservations(userID)
  }

  render(){
    let reservationsFetch = null
    if (this.props.reservations.reservations.error !== "Not Found") {
     reservationsFetch = <ReservationsList reservations={this.props.reservations.reservations}/>
    }
    if(!localStorage.getItem('jwt')){
      return <Redirect to="/home"/>
    }

    return(
      <div className="ui container">
          <NavLink to="/addnew"><button className="ui primary button">Add New</button></NavLink>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <h1>Your Listings</h1>
            <ParkingSpotsList spots={this.props.parkingSpots}/>
          <h1>Requests</h1>
            <h2>Pending</h2>
            {reservationsFetch}
            <h2>Confirmed</h2>
            <h2>Denied</h2>
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

function mapDispatchToProps(dispatch) {
  return  bindActionCreators({fetchReservations}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
