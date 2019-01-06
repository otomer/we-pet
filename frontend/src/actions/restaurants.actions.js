import axios from 'axios';

export const API_URL_GET_RESTAURANTS = 'restaurants';
export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
export const RETRIEVED_RESTAURANTS = 'RETRIEVED_RESTAURANTS';

export const requestRestaurants = () => ({ type: REQUEST_RESTAURANTS });
export const retrieveRestaurants = restaurants => ({
  type: RETRIEVED_RESTAURANTS,
  restaurants: restaurants,
  retrievedAt: Date.now(),
});

export function fetchRestaurants() {
  return (dispatch, getState) => {
    dispatch(requestRestaurants());
    return axios
      .get(API_URL_GET_RESTAURANTS)
      .then(response => response.data.restaurants)
      .then(restaurants => dispatch(retrieveRestaurants(restaurants)));
  };
}
