import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getParkingSpot } from '../actions/parkingSpots'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { postNewListing } from '../actions/reservations'

import { SingleDatePicker } from 'react-dates';


class ParkingSpotDetail extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      review: "",
      date: null,
      focusedInput: null,
    }
  }

  onChange = (event) => {
    console.log(this.state);
    this.setState({[event.target.name]: event.target.value})
  }

  onClick = (event) => {
    let moment = require('moment');
    let x = moment(this.state.date).format('LL')
    console.log(x);
    let newRes = {
      date: x,
      guest_id: this.props.user.currentUser.id,
      parking_spot_id: this.props.parkingSpot.detail.id,
      status: "pending"
    }
    this.props.postNewListing(newRes)
    this.props.history.push('/confirmation')
  }


  componentDidMount(){
    const parkingSpotId = this.props.location.pathname.split("/")[2]
    this.props.getParkingSpot(parkingSpotId)
  }

  render(){
console.log(this.props);

    let mapAddress = ""
    if (this.props.parkingSpot.detail.address) {
      let address = this.props.parkingSpot.detail.address.split(" ").join("+")
      let city = this.props.parkingSpot.detail.city
      let state = this.props.parkingSpot.detail.state
      let zip = this.props.parkingSpot.detail.zip
      mapAddress = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCNUIlhwaQ4xLbNM5Qs2of7wx7pcw8yjaM&q=${address},${city}+${state}+${zip}`
    }

    // if (this.props.reservations.reservations.error !== "Not Found") {
    //  reservationsFetch = <ReservationsList reservations={this.props.reservations.reservations}/>
    // }

    var moment = require('moment');
    const BAD_DATES = [];
    const isDayBlocked = day => BAD_DATES.filter(d => moment(d).isSame(day, 'day')).length > 0
    if (this.props.parkingSpot.unavailableDates !== null ) {
     this.props.parkingSpot.unavailableDates.filter(dates => dates.status !== "denied").map((dates) => BAD_DATES.push(dates.date))
   }

  //  let reviews = ""

    // if (this.props.parkingSpot.reviews !== null ) {
    //   this.props.parkingSpot.reviews.map((dates) => BAD_DATES.push(dates.date))
    // }


    return(
      <div className="ui segment container">
        <div className="ui header">{this.props.parkingSpot.detail.title}</div>
        <img className="ui huge image" src={this.props.parkingSpot.detail.photo} alt=""/>


        <div className="ui segment">
          <div className="ui primary button">Contact Owner</div>
        </div>


        <div className="ui segment">
          <h1 className="ui header">Availability</h1>
            <div  className="content">

              <SingleDatePicker
                numberOfMonths={1}
                isDayBlocked={isDayBlocked}
                date={this.state.date}
                onDateChange={date => this.setState({ date })}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
              />
                {localStorage.getItem('jwt') ? <div onClick={this.onClick} className="ui primary button right floated content">Request Reservation</div> : null}
            </div>
      </div>




        <div className="ui segment">
          <p>Location</p>
            <iframe title="map"
              width="600"
              height="450"
              src={mapAddress}>
            </iframe>
        </div>








        <div className="ui message">
          <div className="header">
            Reviews
          </div>
            <ul className="list">
              User1: List of Reviews
            </ul>
          </div>
          <form className="ui reply form">
            <div className="field">
              <textarea type="text" name="review" placeholder="Please write your review..." onChange={this.onChange} value={this.state.city}></textarea>
            </div>
            <div className="ui blue labeled submit icon button">
              <i className="icon edit"></i> Add Review
            </div>
          </form>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    parkingSpot: state.parkingSpots,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return  bindActionCreators({getParkingSpot, postNewListing}, dispatch)
  //
  // return {
  //   getParkingSpot: (id) => {
  //     dispatch(getParkingSpot(id))
  //   }
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotDetail)
