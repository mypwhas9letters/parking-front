import React from 'react'

class Login extends React.Component {
  render() {
      return(
        <div className="ui container">
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h2 className="ui image header">
                <div className="content">
                  Log Into Your Account
                </div>
              </h2>
              <form onSubmit={""} className="ui large form">
                <div className="ui stacked segment">
                  <div className="field">
                    <input type="text" name="username" placeholder="Username" onChange={""} value={""}/>
                  </div>
                  <div className="field">
                    <input type="password" name="password" placeholder="Password" onChange={""} value={""}/>
                  </div>
                  <input className="ui fluid large submit button" type="submit" value="Log In"/>
                </div>
              </form>
              <div className="ui message">New User?
                <a href="/signup"> Sign up</a>
              </div>
            </div>
          </div>
        </div>
      )

    }
  }
export default Login
