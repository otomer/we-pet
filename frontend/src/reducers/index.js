import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import restaurantsReducer from './restaurants.reducer';
import cuisinesReducer from './cuisines.reducer';

export default combineReducers({
  restaurantsReducer,
  cuisinesReducer,
  form: formReducer, // Used to submit form via add restaurant
});
