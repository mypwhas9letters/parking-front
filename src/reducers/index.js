import { combineReducers } from 'redux';

import parkingSpotsReducer from './parkingSpotsReducer';
import reservationReducer from './reservationReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    parkingSpots: parkingSpotsReducer,
    user: userReducer,
    reservations: reservationReducer
  });

export default rootReducer;
