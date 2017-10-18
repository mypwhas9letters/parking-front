import React from 'react'
import { NavLink } from 'react-router-dom'

const ParkingSpot = (props) => {
  const detailLink = `/parkingSpot/${props.spot.id}`
  return (
    <div className="item">
      <div className="right floated content">
        <div className="ui button">Contact Owner</div>
      </div>
      <NavLink className="ui medium image" to={detailLink}><img src={props.spot.photo} alt=""/></NavLink>
      <div className="content"></div>
        <h1>{props.spot.title}</h1>
        <div>{props.spot.description}</div>
        <div>
          Address: {props.spot.address}{props.spot.city}{props.spot.state}{props.spot.zip}
        </div>
        <div>Price: ${props.spot.price}</div>

    </div>
  )
}

export default ParkingSpot
