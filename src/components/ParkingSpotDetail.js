import React from 'react'
import { connect } from 'react-redux'
import { getParkingSpot } from '../actions/parkingSpots'
import MyMapComponent from './MyMapComponent'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

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
    //convert to date before sending the date
    console.log(this.props);
    var moment = require('moment');
    let x = moment(this.state.date).format('LL')
    console.log(x);
  }


  componentDidMount(){
    const parkingSpotId = this.props.location.pathname.split("/")[2]
    this.props.getParkingSpot(parkingSpotId)
  }

  render(){
    const showSpot = this.props.parkingSpot
    var moment = require('moment');
    const BAD_DATES = [];
    const isDayBlocked = day => BAD_DATES.filter(d => moment(d).isSame(day, 'day')).length > 0

    if (this.props.parkingSpot.unavailableDates !== null ) {
      this.props.parkingSpot.unavailableDates.map((dates) => BAD_DATES.push(dates.unavailable_dates))
    }


    return(
      <div className="ui segment container">
        <div className="ui header">{showSpot.detail.title}</div>
        <img className="ui huge image" src={showSpot.detail.photo} alt=""/>


        <div className="ui segment">
          <div className="ui primary button">Contact Owner</div>
        </div>


        <div className="ui segment">
          <p>Dates</p>
          <div>
          <SingleDatePicker
            numberOfMonths={1}
            isDayBlocked={isDayBlocked}
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
          />
        </div>
          <div onClick={this.onClick} className="ui primary button">Request Reservation</div>
        </div>






        <div className="ui segment">
          <p>Location</p>
          <MyMapComponent />
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
  return {
    getParkingSpot: (id) => {
      dispatch(getParkingSpot(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotDetail)
