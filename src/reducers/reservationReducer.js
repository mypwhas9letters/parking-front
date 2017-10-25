function reservationsReducer(state = {reservations:null, trips:null, isFetching: false}, action){
    switch (action.type){
      case "FETCHED_RESERVATIONS":
        return Object.assign({}, state, {reservations: action.payload, isFetching: false})
      case "FETCHING_RESERVATIONS":
        return Object.assign({}, state, {isFetching: true})
      case "FETCHED_TRIPS":
        return Object.assign({}, state, {trips: action.payload, isFetching: false})
      case "UPDATE_RESERVATION":
        let oldIndex = state.reservations.findIndex(obj => obj.id === action.payload.id)
        return Object.assign({}, state, {reservations: [...state.reservations.slice(0, oldIndex), action.payload, ...state.reservations.slice(oldIndex + 1)]})
      default:
        return state
    }
  }

export default reservationsReducer
