import React from 'react'

const Reservation = (props) => {
  const profileImg = props.reservation.guest.profile_pic ? props.reservation.guest.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
  const statusButtons = props.reservation.status === "pending" ? (<div><button className="ui primary button">Confirm</button><button className="ui red button">Deny</button></div>) : null
  return (
    <div className="item">
      <img className="ui avatar image" src={profileImg} alt=""/>
      <div className="content">
        <a className="header">{props.reservation.guest.username}</a>
        <div className="description">Requested to book {props.reservation.parking_spot.title} on {props.reservation.date}</div>
      </div>
      <div className="right floated content">
      {statusButtons}
      </div>
    </div>
  )
}

export default Reservation
