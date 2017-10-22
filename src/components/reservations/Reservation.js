import React from 'react'

const Reservation = (props) => {
  console.log(props.reservation);
  const profileImg = props.reservation.guest.profile_pic ? props.reservation.guest.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
  return (
    <div className="item">
      <img className="ui avatar image" src={profileImg}/>
      <div className="content">
        <a className="header">{props.reservation.guest.username}</a>
        <div className="description">Requested to book {props.reservation.parking_spot.title}</div>
      </div>
      <div className="right floated content">
        <button>Button</button>
      </div>
    </div>
  )
}

export default Reservation
