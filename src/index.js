import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import parkingSpotsReducer from './reducers/parkingSpotsReducer'
import userReducer from './reducers/userReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({parkingSpots:parkingSpotsReducer, user:userReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
