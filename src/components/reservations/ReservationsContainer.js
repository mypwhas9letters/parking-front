import React from 'react'
import { connect } from 'react-redux'
import ReservationsList from './ReservationsList'
import { fetchReservations } from '../../actions/reservations'
import { bindActionCreators } from 'redux'


class ReservationsContainer extends React.Component {

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.fetchReservations(jwt)
  }


  render(){
    let reservationsPending = []
    let reservationsApproved = []
    let reservationsDenied = []
    if (this.props.reservations !== null) {
      console.log(this.props.reservations);
      reservationsPending = <ReservationsList reservations={this.props.reservations.filter(res => res.status === "pending")}/>
      reservationsApproved = <ReservationsList reservations={this.props.reservations.filter(res => res.status === "approved")}/>
      reservationsDenied = <ReservationsList reservations={this.props.reservations.filter(res => res.status === "denied")}/>
    }
    return (
      <div className="ui container">
            <h1>Requests</h1>
              <h2>Pending</h2>
              {reservationsPending}
              <h2>Approved</h2>
              {reservationsApproved}
              <h2>Denied</h2>
              {reservationsDenied}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    reservations: state.reservations.reservations
  }
}

function mapDispatchToProps(dispatch) {
  return  bindActionCreators({fetchReservations}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer)
