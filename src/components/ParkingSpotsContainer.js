import React from 'react'
import { connect } from 'react-redux'
import ParkingSpotsList from './ParkingSpotsList'
import { getFilterByZip, fetchParkingSpots } from '../actions/parkingSpots'
import { bindActionCreators } from 'redux'
import MyMapComponent from './MyMapComponent'

class ParkingSpotsContainer extends React.Component {

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

          <div className="ui icon input">
            <input type="text" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip}/>
            <input type="text" name="distance" placeholder="Distance(mi)" onChange={this.onChange} value={this.state.distance}/>
            <button className="ui primary button" onClick={this.onClick}>Search</button>
          </div>
            <button className="ui primary button">By Price</button>
            <button className="ui primary button">By Rating</button>
          </div>
          <div className="ui segment">
            <ParkingSpotsList spots={this.props.parkingSpots.parkingSpots}/>
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
