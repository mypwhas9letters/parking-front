// export function login(username, password) {
//   return dispatch => {
//       dispatch(request({ username }));
//         userService.login(username, password)
//           .then(
//             user => {
//       dispatch(success(user));
//                 history.push('/');
//                 },
//                 error => {
//                   dispatch(failure(error));
//                   dispatch(alertActions.error(error));
//     }
//   );
// };

// fetch("http://localhost:3000/api/v1/users")


// export function fetchParkingSpots(){
//   return function(dispatch){
//     dispatch(fetchingSpots())
//     fetch("http://localhost:3000/api/v1/parking_spots")
//       .then((res) => res.json())
//       .then((json) => {
//         const parkingSpots = json
//         dispatch(fetchedSpots(parkingSpots))
//       })
//     }
//   }
