import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyMapComponent from './MyMapComponent';
import ParkingSpotsList from './ParkingSpotsList';
import { getFilterByZip, fetchParkingSpots } from '../actions/parkingSpots';

class ParkingSpotsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      zip: "",
      distance: ""
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.getFilterByZip(this.state)
  }

  componentDidMount(){
    // this.props.fetchParkingSpots()
  }

  render(){
    return (
      <div className="container pageMargin">
        <div className="card">
          <div className="card-body">
            <h1>Search for nearby parking spaces</h1>
            <p>Currently only serving the NYC area. Please use NYC zip codes (ex. 10004, 11217)</p>
            <form class="form-inline">
              <div class="form-group">
                <label>Zip</label>
                <input type="text" class="form-control mx-sm-3" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip}/>
              </div>
              <div class="form-group">
                <label>Distance</label>
                <input type="text"  class="form-control mx-sm-3" name="distance" placeholder="Distance(mi)" onChange={this.onChange} value={this.state.distance}/>
              </div>
              <button className="btn btn-primary blue" onClick={this.onClick}>Search</button>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <label>Sort: </label>
              <div class="btn-group" >
                <button type="button" class="btn btn-primary blue">By Price</button>
                <button type="button" class="btn btn-primary blue">By Rating</button>
                <button type="button" class="btn btn-primary blue">By Type</button>
              </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
          {this.props.parkingSpots.isFetching ?
            <div className="text-center">
              <div className="loader"></div>

                Loading...<br/>Due to inactivity on Heroku Servers, the first load may take a couple of seconds.
              </div>
            :
              <ParkingSpotsList spots={this.props.parkingSpots.parkingSpots}/>
            }
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <MyMapComponent
              markers={this.props.parkingSpots}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOf9SR36Oz4MaKIBqhN5S4TBxcbRr75TE&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>

        </div>
      )
    }
  }

function mapStateToProps(state){
  return{
    parkingSpots: state.parkingSpots
  }
}

function mapDispatchToProps(dispatch){
  return  bindActionCreators({getFilterByZip, fetchParkingSpots}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotsContainer)
