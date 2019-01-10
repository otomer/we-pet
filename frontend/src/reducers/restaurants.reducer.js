import { REQUEST_RESTAURANTS, RETRIEVED_RESTAURANTS } from '../actions';

const restaurantsReducer = (
  state = {
    isFetching: false,
    restaurants: [],
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_RESTAURANTS:
      return {
        ...state,
        isFetching: true,
      };
    case RETRIEVED_RESTAURANTS:
      return {
        ...state,
        isFetching: false,
        restaurants: action.restaurants,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
