import React, { Component } from 'react';
import { connect } from 'react-redux';

import YourReservationsList from './YourReservationsList';
import { fetchTrips } from '../../actions/reservations';

class YourReservationsContainer extends Component {
  componentDidMount(){
    const jwt = localStorage.getItem('jwt');
    this.props.fetchTrips(jwt);
  }

  render(){
    let myTrips = []
    if(this.props.trips.trips !== null){
      myTrips = <YourReservationsList reservations={this.props.trips.trips}/>
    }
    return (
      <div className="container">
        <h1>Reservations</h1>
        <div className="ui segment">
          {myTrips}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    trips: state.reservations
  }
}

export default connect(mapStateToProps, { fetchTrips })(YourReservationsContainer)
