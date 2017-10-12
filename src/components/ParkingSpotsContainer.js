import React from 'react'
import { connect } from 'react-redux'
import ParkingSpotsList from './ParkingSpotsList'

class ParkingSpotsContainer extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/parking_spots")
    .then((res) => res.json())
    .then((json) => {
      const parkingSpots = json.items
      this.setState({
        parkingSpots: parkingSpots
      })
    })
  }

  render(){
    return (
      <ParkingSpotsList spots={this.props.parkingSpots}/>
    )
  }
}

function mapStateToProps(state){
  return{
    parkingSpots: state.parkingSpots
  }
}

export default connect(mapStateToProps)(ParkingSpotsContainer)
