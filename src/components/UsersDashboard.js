import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AddNew from './forms/AddNewListing';
import EditProfile from './forms/EditProfile';
import Profile from './Profile';
import ReservationsContainer from './reservations/ReservationsContainer';
import YourReservationsContainer from './reservations/YourReservationsContainer';

class UsersDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      tab: <Profile />,
      activeItem: 'Profile'
    }
  }

  onClick = (event) => {
    this.setState({ activeItem: event.target.name })
    switch (event.target.name){
      case "AddNew":
        return this.setState({tab: <AddNew />})
      case "Requests":
        return this.setState({tab: <ReservationsContainer />})
      case "Your Reservations":
        return this.setState({tab: <YourReservationsContainer />})
      case "EditProfile":
        return this.setState({tab: <EditProfile />})
      default:
        return this.setState({tab: <Profile/>})
    }
  }

  render(){
    if (!localStorage.getItem('jwt')){return <Redirect to="/login" />}
    const tabToRender = (this.state.tab);
    return(
      <div className="container pageMargin">
        <div className="nav nav-tabs">
          <a className="nav-item nav-link" name="Profile" onClick={this.onClick}>Profile Page</a>
          <a className="nav-item nav-link" name="Requests" onClick={this.onClick}>Requests</a>
          <a className="nav-item nav-link" name="Your Reservations" onClick={this.onClick}>Your Reservations</a>
          <a className="nav-item nav-link" name="AddNew" onClick={this.onClick}>AddNew</a>
          <a className="nav-item nav-link" name="EditProfile" onClick={this.onClick}>EditProfile</a>
        </div>
        <div>
          { tabToRender }
        </div>
      </div>
    );
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

export default connect(mapStateToProps)(UsersDashboard);
