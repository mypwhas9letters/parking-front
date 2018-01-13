import React from 'react'
import ParkingSpot from './ParkingSpot'

const ParkingSpotsList = (props) => {
  const parkingSpot = props.spots.map((spots) => <ParkingSpot key={spots.id} spot={spots} />)
  return(
    <div className="ui three stackable cards">
      {parkingSpot}
    </div>
  )
}

export default ParkingSpotsList
