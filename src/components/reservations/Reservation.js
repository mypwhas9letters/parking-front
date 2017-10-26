import React from 'react'

const Reservation = (props) => {
  const profileImg = props.reservation.guest.profile_pic ? props.reservation.guest.profile_pic : "http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg"
  const statusButtons = props.reservation.status === "pending" ? (<div className="right floated content"><button name="approved" value={props.reservation.id} onClick={props.onclick} className="ui primary button">Confirm</button><button name="denied" value={props.reservation.id} onClick={props.onclick} className="ui red button">Deny</button></div>) : null
  const currentStep = props.reservation.status



  return (
    <div className="item">
      <img className="ui mini image" src={profileImg} alt=""/>
      <div className="content">
        <a className="header">{props.reservation.guest.username}</a>
        <div className="description">Requested to book {props.reservation.parking_spot.title} on {props.reservation.date}</div>
    </div>
    {statusButtons}

      <div className="content">
        {currentStep !== "denied" ?
                        <div className="ui small steps">
                          <div className={currentStep === "pending" ? "active step": "completed step"}>
                            <i className="check circle icon"></i>
                            <div className="content">
                              <div className="title">{currentStep === "pending" ? "Awaiting Your Confirmation": "Confirmed"}</div>
                            </div>
                          </div>
                          <div className={currentStep === "approved" ? "active step": "step"}>
                            <i className="payment icon"></i>
                            <div className="content">
                              <div className="title">Billing</div>
                              <div className="description">Enter billing information</div>
                            </div>
                          </div>
                          <div className="step">
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

export default Reservation
