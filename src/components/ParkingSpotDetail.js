import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import ReactStars from 'react-stars';

import { getParkingSpot } from '../actions/parkingSpots';
import { postNewListing } from '../actions/reservations';

class ParkingSpotDetail extends Component{
  constructor(props){
    super(props);

    this.state = {
      review: "",
      date: null,
      focusedInput: null,
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onClick = (event) => {
    let moment = require('moment');
    let x = moment(this.state.date).format('LL')
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
    // Formatting the address for the Google Maps
    let mapAddress = ""
    if (this.props.parkingSpot.detail.address) {
      let address = this.props.parkingSpot.detail.address.split(" ").join("+")
      let city = this.props.parkingSpot.detail.city
      let state = this.props.parkingSpot.detail.state
      let zip = this.props.parkingSpot.detail.zip
      mapAddress = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCNUIlhwaQ4xLbNM5Qs2of7wx7pcw8yjaM&q=${address},${city}+${state}+${zip}`
    }

    // Block out unavailable dates
    var moment = require('moment');
    const BAD_DATES = [];
    const isDayBlocked = day => BAD_DATES.filter(d => moment(d).isSame(day, 'day')).length > 0
    if (this.props.parkingSpot.unavailableDates !== null ) {
     this.props.parkingSpot.unavailableDates.filter(dates => dates.status !== "denied").map((dates) => BAD_DATES.push(dates.date))
    }

   //render reviews
   let reviews = ""
   let reviewLength = 0
   if (this.props.parkingSpot.reviews !== null ) {
     reviewLength = this.props.parkingSpot.reviews.length
     reviews = this.props.parkingSpot.reviews.map((each) => (<li className="list-group-item" key={each.id}>{each.review}</li>))
   }

   //render stars
   const roundedRating = (Math.round(this.props.parkingSpot.detail.rating*2)/2).toFixed(1)
   let stars = <ReactStars
     count={5}
     value={Number(roundedRating)}
     edit={false}
     half={true}
     size={20}
     color2={'#ffd700'}/>

    return(
      <div className="container pageMargin">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title boldBlueText">{this.props.parkingSpot.detail.title}</h1>
            <img className="card-img-bottom" src={this.props.parkingSpot.detail.photo} alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title boldBlueText">Detail</h1>
                <div><span className="bold">Description:</span> {this.props.parkingSpot.detail.description}</div>
                <div><span className="bold">Rating:</span> {reviewLength} Reviews { stars } </div>
                <div><span className="bold">Address:</span> {this.props.parkingSpot.detail.address}</div>
                <div><span className="bold">Price:</span> ${this.props.parkingSpot.detail.price}</div>
                <div><span className="bold">Cancellation:</span> Full refund up to 7 days before reservation. </div>
                <div><span className="bold">Amenities:</span> Electric Car charger included. </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title boldBlueText">Availability</h1>
                <div>
                  <SingleDatePicker
                    numberOfMonths={ 1 }
                    isDayBlocked={ isDayBlocked }
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                  />
                </div>
                { localStorage.getItem('jwt') ? <div onClick={this.onClick} className="btn btn-primary blue reservationButton">Request Reservation</div> : <div>Please Log In Or Sign Up to Book</div> }
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <iframe
            title="map"
            width="100%"
            height="700px"
            src={ mapAddress }>
          </iframe>
        </div>

        <div className="card">
          <div className="card-body">
            <h1 className="card-title boldBlueText">Reviews</h1>
            <ul className="list-group list-group-flush">
              { reviews }
            </ul>
          </div>
        </div>
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
  return  bindActionCreators({getParkingSpot, postNewListing}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotDetail);
