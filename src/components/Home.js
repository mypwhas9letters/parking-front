import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyMapComponent from './MyMapComponent';
import ParkingSpot from './ParkingSpot';
import { getFilterByZip, fetchParkingSpots, filterBy, sortBy } from '../actions/parkingSpots';

class ParkingSpotsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      zip: "",
      distance: "",
      price: "asc",
      rating: "asc"
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.getFilterByZip(this.state)
  }

  onTypeChange = (event) => {
    event.preventDefault()
    this.props.filterBy(event.target.name)
  }

  onSort = (event) => {
    event.preventDefault()
    let ascOrDesc = this.state[event.target.name]
    this.props.sortBy([event.target.name, ascOrDesc])
    event.target.value === "asc" ? this.setState({[event.target.name]: "desc"}) : this.setState({[event.target.name]: "asc"})
  }

  render(){
    const parkingSpotsList = this.props.parkingSpots.parkingSpots ? this.props.parkingSpots.parkingSpots.map((spots) => <ParkingSpot key={spots.id} spot={spots} />)  : null
    return (
      <div className="container pageMargin">
        <div className="card">
          <div className="card-body">
            <h1 className="boldBlueText">Search for nearby parking spaces</h1>
            <p>Currently only serving the NYC area. Please use NYC zip codes (ex. 10004, 11217)</p>
            <form className="form-inline" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Zip</label>
                <input type="number" className="form-control mx-sm-3" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip} required/>
              </div>
              <div className="form-group">
                <label>Distance</label>
                <input type="number" className="form-control mx-sm-3" name="distance" placeholder="Distance (mi)" onChange={this.onChange} value={this.state.distance} required/>
              </div>
              <button type="submit" className="btn btn-primary blue">Search</button>
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
              <div className="row">
                {parkingSpotsList}
              </div>
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
  return bindActionCreators({ getFilterByZip, fetchParkingSpots, filterBy, sortBy }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotsContainer);
