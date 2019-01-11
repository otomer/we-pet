import { RESTAURANT_MAX_RATING } from '../constants';
import axios from 'axios';
import { formatQueryParams } from '../helpers/query-helper';
import sample from 'lodash/sample';

// Actions
export const GET_RESTAURANTS_START = 'GET_RESTAURANTS_START';
export const GET_RESTAURANTS_END = 'GET_RESTAURANTS_END';
export const GET_TOP_RESTAURANT = 'GET_TOP_RESTAURANT';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_RATING = 'FILTER_RATING';
export const FILTER_CUISINE = 'FILTER_CUISINE';
export const FILTER_DELIVERY = 'FILTER_DELIVERY';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

export const getRestaurantsStart = () => ({ type: GET_RESTAURANTS_START });
export const getRestaurantsEnd = restaurants => ({
  type: GET_RESTAURANTS_END,
  restaurants,
  retrievedAt: Date.now(),
});

const getRestaurants = (searchQuery = '') => {
  return axios
    .get(`restaurants?${searchQuery}`)
    .then(response => response.data.restaurants);
};

export function fetchRestaurants(filters = {}) {
  return (dispatch, getState) => {
    const {
      cuisineFilter,
      nameFilter,
      maxDeliveryTimeFilter,
      ratingFilter,
    } = getState().restaurantsReducer;

    dispatch(getRestaurantsStart());
    return getRestaurants(
      formatQueryParams({
        ...filters,
        q_cuisine: cuisineFilter,
        q_name: nameFilter,
        q_max_delivery_time: maxDeliveryTimeFilter,
        q_min_rating_avg: ratingFilter,
      }),
    ).then(restaurants => dispatch(getRestaurantsEnd(restaurants)));
  };
}

export const filterName = q_name => (dispatch, getState) => {
  dispatch({ type: FILTER_NAME, nameFilter: q_name });
  fetchRestaurants({ q_name })(dispatch, getState);
};

export const filterCuisine = q_cuisine => (dispatch, getState) => {
  dispatch({ type: FILTER_CUISINE, cuisineFilter: q_cuisine });
  fetchRestaurants({ q_cuisine })(dispatch, getState);
};

export const filterRating = q_min_rating_avg => (dispatch, getState) => {
  dispatch({ type: FILTER_RATING, ratingFilter: q_min_rating_avg });
  fetchRestaurants({ q_min_rating_avg })(dispatch, getState);
};

export const filterMaxDeliveryTime = q_max_delivery_time => (
  dispatch,
  getState,
) => {
  dispatch({
    type: FILTER_DELIVERY,
    maxDeliveryTimeFilter: q_max_delivery_time,
  });
  fetchRestaurants({ q_max_delivery_time })(dispatch, getState);
};

export const getTopRestaurant = topRestaurant => ({
  type: GET_TOP_RESTAURANT,
  topRestaurant,
});

export function fetchTopRestaurant() {
  return (dispatch, getState) => {
    return getRestaurants(
      formatQueryParams({ q_min_rating_avg: RESTAURANT_MAX_RATING }),
    ) // Filter 3 rating restaurants
      .then(restaurants => sample(restaurants)) // Take random restaurant
      .then(topRestaurant => dispatch(getTopRestaurant(topRestaurant)));
  };
}

const restaurantAdded = newRestaurant => ({
  type: ADD_RESTAURANT,
  newRestaurant,
});

const postRestaurant = restaurant => {
  // NOTE: Ignore - UI missing for location insertion, testing the association insertion with hard coded location.
  restaurant.location = {
    address: 'Menachem Begin 144, Tel Aviv',
    latitude: '32.07742',
    longitude: '34.79305',
  };

  return axios.post('restaurants', restaurant);
};

export const addRestaurant = restaurant => {
  return (dispatch, getState) => {
    return postRestaurant(restaurant);
  };
};
