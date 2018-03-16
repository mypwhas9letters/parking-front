const herokuServer = "https://parallelp-server.herokuapp.com"
//testServer = "http://localhost:3000"

export function login(usersParams) {
  const body = JSON.stringify(usersParams)
  return function(dispatch){
    fetch(`${herokuServer}/api/v1/login`, {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((user) => {
      if (user.success) {
        dispatch({type: "LOG_IN", payload: user})
      }else{
        return user.message
      }
     })
     .then(() => usersParams.history.push("/usersDashboard"))
   }
 }

export function getCurrentUser(jwt){
    return function(dispatch) {
      fetch(`${herokuServer}/api/v1/users/me`,{
        method: 'get',
        headers: {
          "Authorization":`Bearer ${jwt}`,
          "Accept":"application/json"
        }
      })

      .then(res => res.json())
      .then(json => {
          dispatch({type: "GET_CURRENT_USER", payload: json})
      })
    }
}

export function logoutUser() {
  return{
    type: "LOG_OUT"
  }
}

export function signup(usersParams) {
  const body = JSON.stringify(usersParams)
  return function(dispatch){
    fetch(`${herokuServer}/api/v1/users`, {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(res => dispatch({type: "LOG_IN", payload: res}))
    .then(() => window.location.href = ("/UsersDashboard"))
  }
}
