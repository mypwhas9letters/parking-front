import React from 'react'

const ParkingSpot = (props) => {
  console.log(props);
  return (
    <div className="item">
      <div className="right floated content">
        <div className="ui button">Contact Owner</div>
      </div>
      <img className="ui medium image" src={props.spot.photo}/>
      <div className="content">
        <div>
          {props.spot.description}
        </div>
        <div>
          {props.spot.address}
        </div>

      </div>
    </div>
  )
}

export default ParkingSpot
