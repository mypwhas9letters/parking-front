import React from 'react'

class Signup extends React.Component {
  render() {
    return(
      <div className="ui container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Create a New Account
              </div>
            </h2>
            <form onSubmit={""} className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <input onChange={""} type="text" name="username" placeholder="Username" value={""}/>
                </div>
                <div className="field">
                  <input onChange={""} type="password" name="password" placeholder="Password" value={""}/>
                </div>
                <div className="field">
                  <input onChange={""} type="password" name="confirm password" placeholder="Confirm Password" value={""}/>
                </div>
                <input className="ui fluid large submit button" type="submit" value="Sign Up"/>
              </div>
            </form>
            <div className="ui message">Existing User?
              <a href="/login"> Log In</a>
            </div>
          </div>
        </div>
      </div>
      )
      }
  }
export default Signup
