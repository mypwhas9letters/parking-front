import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchReservations } from '../actions/reservations'
import ParkingSpotsList from './ParkingSpotsList'
import ReservationsList from './reservations/ReservationsList'
import { bindActionCreators } from 'redux'


class Profile extends React.Component {

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.fetchReservations(jwt)
  }

  render(){

    let reservationsPending = null
    let reservationsApproved = null
    let reservationsDenied = null
    if (this.props.reservations.reservations.error !== "Not Found") {
     reservationsPending = <ReservationsList reservations={this.props.reservations.reservations.filter(res => res.status === "pending")}/>
     reservationsApproved = <ReservationsList reservations={this.props.reservations.reservations.filter(res => res.status === "approved")}/>
     reservationsDenied = <ReservationsList reservations={this.props.reservations.reservations.filter(res => res.status === "denied")}/>
}

// .filter(dates => dates.status !== "denied").map((dates) => BAD_DATES.push(dates.date))





    if(!localStorage.getItem('jwt')){
      return <Redirect to="/home"/>
    }
    console.log(this.props);

    return(
      <div className="ui container">
          <NavLink to="/addnew"><button className="ui primary button">Add New</button></NavLink>
          <h1>Welcome {this.props.currentUser.username}</h1>




          <h1>Your Listings</h1>
            <ParkingSpotsList spots={this.props.parkingSpots}/>
          <h1>Requests</h1>
            <h2>Pending</h2>
            {reservationsPending}
            <h2>Approved</h2>
            {reservationsApproved}
            <h2>Denied</h2>
            {reservationsDenied}
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
