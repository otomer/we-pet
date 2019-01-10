import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants.reducer';
import cuisinesReducer from './cuisines.reducer';

export default combineReducers({
  restaurantsReducer,
  cuisinesReducer,
});
