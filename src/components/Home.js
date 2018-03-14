import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyMapComponent from './MyMapComponent';
import ParkingSpotsList from './ParkingSpotsList';
import { getFilterByZip, fetchParkingSpots, filterBy, sortBy } from '../actions/parkingSpots';

class ParkingSpotsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      zip: "",
      distance: "",
      price: true,
      rating: true
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

  onTypeChange = (event) => {
    event.preventDefault()
    this.props.filterBy(event.target.name)
  }

  onSort = (event) => {
    event.preventDefault()
    let ascOrDsc = !event.target.value
    console.log(ascOrDsc)
    this.setState({[event.target.name]: ascOrDsc})

    this.props.sortBy(event.target.name)
    // this.props.sortBy({by:event.target.name, ascOrDec: event.target.value})
  }

  render(){
    console.log(this.state)
    return (
      <div className="container pageMargin">
        <div className="card">
          <div className="card-body">
            <h1 className="boldBlueText">Search for nearby parking spaces</h1>
            <p>Currently only serving the NYC area. Please use NYC zip codes (ex. 10004, 11217)</p>
            <form className="form-inline">
              <div className="form-group">
                <label>Zip</label>
                <input type="text" className="form-control mx-sm-3" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip}/>
              </div>
              <div className="form-group">
                <label>Distance</label>
                <input type="text" className="form-control mx-sm-3" name="distance" placeholder="Distance(mi)" onChange={this.onChange} value={this.state.distance}/>
              </div>
              <button className="btn btn-primary blue" onClick={this.onClick}>Search</button>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="btn-group" >
              <button type="button" className="btn btn-primary blue" onClick={this.onSort} name="price" value={this.state.price}>By Price</button>
              <button type="button" className="btn btn-primary blue" onClick={this.onSort} name="rating" value={this.state.rating}>By Rating</button>
              <button type="button" className="btn btn-primary blue" onClick={this.onTypeChange} name="all">All Types</button>
              <button type="button" className="btn btn-primary blue" onClick={this.onTypeChange} name="driveway">Driveways</button>
              <button type="button" className="btn btn-primary blue" onClick={this.onTypeChange} name="garage">Garages</button>
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
              <ParkingSpotsList spots={this.props.parkingSpots.sortedSpaces}/>
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
  return bindActionCreators({ getFilterByZip, fetchParkingSpots, filterBy, sortBy }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotsContainer)
