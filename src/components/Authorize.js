import React from 'react'
import { Redirect } from 'react-router-dom'


function Authorize(RenderedComponent) {
  return class extends React.Component {
    debugger
    render() {

      if (localStorage.getItem('jwt') && this.props.location.pathname === "/login") {
        return <Redirect to="/login" />
      } else if (!localStorage.getItem('jwt') && this.props.location.pathname !== "/login") {
        return <Redirect to="/login" />
      } else {
        return (
          <RenderedComponent />
        )
      }

    }
  }
}

export default Authorize
