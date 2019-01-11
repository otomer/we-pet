import {
  ADD_RESTAURANT,
  FILTER_CUISINE,
  FILTER_DELIVERY,
  FILTER_NAME,
  FILTER_RATING,
  GET_RESTAURANTS_END,
  GET_RESTAURANTS_START,
  GET_TOP_RESTAURANT,
} from '../actions';

const restaurantsReducer = (
  state = {
    isFetching: false,
    topRestaurant: null,
    restaurants: null,
    cuisineFilter: null,
    nameFilter: null,
    ratingFilter: null,
  },
  action,
) => {
  switch (action.type) {
    case GET_RESTAURANTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_RESTAURANTS_END:
      return {
        ...state,
        isFetching: false,
        restaurants: action.restaurants,
        lastUpdated: action.receivedAt,
      };
    case GET_TOP_RESTAURANT: {
      return {
        ...state,
        topRestaurant: action.topRestaurant,
      };
    }
    // Filters
    case FILTER_CUISINE:
      return {
        ...state,
        cuisineFilter: action.cuisineFilter,
      };
    case FILTER_NAME:
      return { ...state, nameFilter: action.nameFilter };
    case FILTER_RATING:
      return { ...state, ratingFilter: action.ratingFilter };
    case FILTER_DELIVERY:
      return { ...state, maxDeliveryTimeFilter: action.maxDeliveryTimeFilter };

    case ADD_RESTAURANT:
      return {
        ...state,
        restaurants: [...state.restaurants, action.newRestaurant],
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
