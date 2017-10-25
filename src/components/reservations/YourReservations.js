import React from 'react'
import { connect } from 'react-redux'
import ReservationsList from './ReservationsList'
import { bindActionCreators } from 'redux'
import { fetchTrips } from '../../actions/reservations'


class ReservationsContainer extends React.Component {

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.fetchTrips(jwt)
  }


  render(){
    let myTrips = []
    if(this.props.trips.trips !== null){
      myTrips = <ReservationsList reservations={this.props.trips.trips}/>
    }
    return (
      <div className="ui container">
        {myTrips}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    trips: state.reservations
  }
}

function mapDispatchToProps(dispatch) {
  return  bindActionCreators({fetchTrips}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer)
