import React from 'react'
import { NavLink } from 'react-router-dom'


class Profile extends React.Component {
  render(){
    return(
      <div>
          <NavLink to="/addnew"><button className="ui primary button">Add New</button></NavLink>
        <p>Hello</p>

      </div>
    )
  }

}

export default Profile
