import React from 'react'
import { NavLink } from 'react-router-dom'

const ParkingSpot = (props) => {
  const detailLink = `/parkingSpot/${props.spot.id}`
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="ui image">
          <NavLink to={detailLink}><img src={props.spot.photo} alt=""/></NavLink>
        </div>
      <div className="content">
        <div className="header">{props.spot.title}</div>
        <div className="right floated meta">New York</div>

        <div className="meta">
          <span>Price: ${props.spot.price}</span>
        </div>
        <div className="description">Description: {props.spot.description}</div>
        <div className="description">
          Address:<br/>
          {props.spot.address}<br/>
          {props.spot.city}, {props.spot.state} {props.spot.zip}
        </div>

      </div>
    </div>
  </div>
  )
}

export default ParkingSpot
