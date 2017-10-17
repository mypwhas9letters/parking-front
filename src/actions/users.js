export function login(usersParams) {
  const body = JSON.stringify(usersParams)
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/login", {
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
    } else {
        return user.message
      }
     })
  }
}

// export function getUserData(jwt){
//
//
//     return function(dispatch) {
//       const url = 'http://localhost:3000/api/v1/getcurrentuser'
//
//       const headers = {
//         method: 'get',
//         headers: {
//           "Authorization":`Bearer ${jwt}`,
//           "Accept":"application/json"
//         }
//       }
//
//       fetch(url, headers)
//       .then(res => res.json())
//       .then(json => {
//         if (json.success) {
//           dispatch({type: "GET_CURRENT_USER", payload: json})
//         }
//       })
//     }
// }






// export function logoutUser() {
//   localStorage.removeItem("jwtToken")
// }




export function signup(usersParams) {
  const body = JSON.stringify(usersParams)
  debugger
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/users", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())

  }
}
