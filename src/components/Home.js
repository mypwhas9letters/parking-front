import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MyMapComponent from './MyMapComponent'
import ParkingSpotsList from './ParkingSpotsList'
import { getFilterByZip, fetchParkingSpots } from '../actions/parkingSpots'

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
      <div className="ui container">
        <div className="ui segment">
          <h1>Search for nearby parking spaces</h1>
          <p>Currently only serving the NYC area. Please use NYC zip codes (ex. 10004, 11217)</p>

            <div className="ui form">
              <div className="inline fields">
                <div className="field">
                  <label>Zip</label>
                  <input type="text" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip}/>
                </div>
                <div className="field">
                  <label>Distance</label>
                  <input type="text" name="distance" placeholder="Distance(mi)" onChange={this.onChange} value={this.state.distance}/>
                </div>
                <div className="field">
                <button className="ui primary button" onClick={this.onClick}>Search</button>
                </div>

              </div>
            </div>
          </div>

          <div className="ui segment">

            <label>Sort: </label>

            <div className="ui buttons">

            <button className="ui primary button">By Price</button>
            <button className="ui primary button">By Rating</button>
            <button className="ui primary button">By Type</button>
            </div>
            
          </div>


          <div className="ui segment">
            {this.props.parkingSpots.isFetching ?
              <div>
                <div className="ui active inverted dimmer">
                  <div className="ui large text loader">Loading<br/>Due to inactivity on Heroku Servers. First load may take a couple of seconds.</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            :
              <ParkingSpotsList spots={this.props.parkingSpots.parkingSpots}/>
            }
          </div>
          <div className="ui segment">
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
