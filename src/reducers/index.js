import reservationReducer from './reservationReducer';
import parkingSpotsReducer from './parkingSpotsReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    parkingSpots: parkingSpotsReducer,
    user: userReducer,
    reservations: reservationReducer
  }
);

export default rootReducer;
