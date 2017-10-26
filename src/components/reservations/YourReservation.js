import React from 'react'
import { NavLink } from 'react-router-dom'


const YourReservation = (props) => {
  console.log(props.reservation.status);
  const profileImg = props.reservation.guest.profile_pic ? props.reservation.guest.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
  // const statusButtons = props.reservation.status === "pending" ? (<div><button name="approved" value={props.reservation.id} className="ui primary button">Confirm</button><button name="denied" value={props.reservation.id} onClick={props.onclick} className="ui red button">Deny</button></div>) : null
  // const YourReservationStatus = props.reservation.status.charAt(0).toUpperCase() + props.reservation.status.slice(1)
  const currentStep = props.reservation.status
  const detailLink = `/parkingSpot/${props.reservation.parking_spot.id}`


  return (
    <div className="item">
      <div className="content">

        {currentStep !== "denied" ?
                        <div className="ui small steps">

                          <div className="step">
                            <i><img className="ui avatar image" src={profileImg} alt=""/></i>
                            <div className="content">
                              <div className="title">{props.reservation.guest.username}</div>
                              <NavLink to={detailLink}><div className="description">{props.reservation.parking_spot.title}</div></NavLink>
                              <div className="description">Date {props.reservation.date}</div>
                            </div>
                          </div>



                          <div className={currentStep === "pending" ? "active step": "completed step"}>
                            <i className="check circle icon"></i>
                            <div className="content">
                              <div className="title">{currentStep === "pending" ? "Awaiting Confirmation": "Confirmed"}</div>
                              <div className="description">{currentStep === "pending" ? "Awaiting Confirmation From Host": ""}</div>
                            </div>
                          </div>
                          <div className={currentStep === "approved" ? "active step": "step disabled"}>
                            <i className="payment icon"></i>
                            <div className="content">
                              <div className="title">Billing</div>
                              <div className="description">Enter billing information</div>
                            </div>
                          </div>
                          <div className="step disabled">
                            <i className="info icon"></i>
                            <div className="content">
                              <div className="title">Completed</div>
                              <div className="description">Verify order details</div>
                            </div>
                          </div>
                        </div>
                        :

                        <div className="ui small steps">
                          <div className="step">
                            <i><img className="ui avatar image" src={profileImg} alt=""/></i>
                            <div className="content">
                              <div className="title">{props.reservation.guest.username}</div>
                              <div className="description">Requested to book {props.reservation.parking_spot.title}</div>
                              <div className="description">Date {props.reservation.date}</div>
                            </div>
                          </div>
                        <div className="step deniedStep">
                          <i className="remove icon"></i>
                          <div className="content">
                            <div className="title">Denied</div>
                            <div className="description">Sorry, your request was denied</div>
                          </div>
                        </div>
                        </div>
                        }
        </div>

    </div>
  )
}

export default YourReservation
