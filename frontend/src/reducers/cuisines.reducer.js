import { REQUEST_CUISINES, RETRIEVED_CUISINES } from '../actions';

const cuisinesReducer = (
  state = {
    isFetching: false,
    restaurants: [],
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_CUISINES:
      return {
        ...state,
        isFetching: true,
      };
    case RETRIEVED_CUISINES:
      return {
        ...state,
        isFetching: false,
        cuisines: action.cuisines,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default cuisinesReducer;
