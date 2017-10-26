import React from 'react'
import { connect } from 'react-redux'
import YourReservationsList from './YourReservationsList'
import { bindActionCreators } from 'redux'
import { fetchTrips } from '../../actions/reservations'


class YourReservationsContainer extends React.Component {

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.fetchTrips(jwt)
  }


  render(){
    let myTrips = []
    if(this.props.trips.trips !== null){
      myTrips = <YourReservationsList reservations={this.props.trips.trips}/>
    }
    return (
      <div className="ui container">
        <h1>Reservations</h1>
        <div className="ui segment">
          {myTrips}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(YourReservationsContainer)
