// export function login(usersParams) {
//   const body = JSON.stringify(usersParams)
//   return function(dispatch){
//     fetch("http://localhost:3000/api/v1/users", {
//       method: 'post',
//       body: body,
//       headers: {
//         "Accept":"application/json",
//         "Content-Type":"application/json"
//         }
//     })
//     .then((res) => res.json())
//     .then((json) => {
//       dispatch(addNewListing(json))
//     })
//   }
// }

// export function signup(usersParams) {
//   const body = JSON.stringify(usersParams)
//   return function(dispatch){
//     fetch("http://localhost:3000/api/v1/users", {
//       method: 'post',
//       body: body,
//       headers: {
//         "Accept":"application/json",
//         "Content-Type":"application/json"
//         }
//     })
//     .then((res) => res.json())
//     .then((json) => {
//       dispatch(addNewListing(json))
//     })
//   }
// }
