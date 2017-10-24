import React from 'react'
import { connect } from 'react-redux'
import ParkingSpotsList from './ParkingSpotsList'
import { getFilterByZip } from '../actions/parkingSpots'

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

  // componentDidMount(){
  //   this.props.fetchParkingSpots()
  // }

  render(){
    return (
      <div className="ui container">
        <div className="ui container">
          <h1>Search for nearby parking spaces</h1>

          <div className="ui icon input">
            <input type="text" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip}/>
            <input type="text" name="distance" placeholder="Distance(mi)" onChange={this.onChange} value={this.state.distance}/>
            <button className="ui primary button" onClick={this.onClick}>Search</button>
          </div>
            <button className="ui primary button">By Price</button>
            <button className="ui primary button">By Rating</button>
          </div>
        <ParkingSpotsList spots={this.props.parkingSpots.parkingSpots}/>
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
  return {
    getFilterByZip: (zip) => {
      dispatch(getFilterByZip(zip))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotsContainer)
