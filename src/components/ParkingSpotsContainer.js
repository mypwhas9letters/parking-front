import React from 'react'
import { connect } from 'react-redux'
import ParkingSpotsList from './ParkingSpotsList'
import { fetchParkingSpots } from '../actions/parkingSpots'
import Search from './Search'

class ParkingSpotsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchParkingSpots()
  }

  render(){
    return (
      <div className="ui container">
        <Search />
        <ParkingSpotsList spots={this.props.parkingSpots}/>
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
