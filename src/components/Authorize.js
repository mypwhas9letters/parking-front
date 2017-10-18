import React from 'react'
import { Redirect } from 'react-router-dom'


function Authorize(RenderedComponent) {
  return class extends React.Component {
    debugger
    render() {

      if (localStorage.getItem('jwt') && this.props.location.pathname === "/login") {
        return <Redirect to="/login" />

        // I am logged in
      } else if (!localStorage.getItem('jwt') && this.props.location.pathname !== "/login") {
        return <Redirect to="/login" />
        // not logged in
      } else {
        return (
          <RenderedComponent />
        )
      }

    }
  }
}

export default Authorize
