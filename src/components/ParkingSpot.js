import React from 'react'

const ParkingSpot = (props) => {
  console.log(props);
  return (
    <div className="item">
      <div className="right floated content">
        <div className="ui button">Contact Owner</div>
      </div>
      <img className="ui medium image" src={props.spot.photo} alt=""/>
      <div className="content">
        <h1>{props.spot.title}</h1>
        <div>{props.spot.description}</div>
        <div>
          Address: {props.spot.address}{props.spot.city}{props.spot.state}{props.spot.zip}
        </div>
        <div>Price: ${props.spot.price}</div>
      </div>
    </div>
  )
}

export default ParkingSpot
