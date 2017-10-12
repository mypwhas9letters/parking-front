import React from 'react'
import ParkingSpot from './ParkingSpot'

const ParkingSpotsList = (props) => {

  const parkingSpot = props.spots.map((spots) => <ParkingSpot key={spots.id} address={spots.address} />)
  return(
    <ul>
      {parkingSpot}
    </ul>
  )

}


export default ParkingSpotsList
