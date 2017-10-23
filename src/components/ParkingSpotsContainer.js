import React from 'react'
import { connect } from 'react-redux'
import ParkingSpotsList from './ParkingSpotsList'
import { fetchParkingSpots } from '../actions/parkingSpots'

class ParkingSpotsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchParkingSpots()
  }

  render(){
    return (
      <div className="ui container">
        <div className="ui container">
          <div className="ui icon input">
            <input type="text" placeholder="Address"/>
            <i className="search icon"></i>
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
    fetchParkingSpots: () => {
      dispatch(fetchParkingSpots())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotsContainer)
