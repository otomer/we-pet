import axios from 'axios';

export const REQUEST_CUISINES = 'REQUEST_CUISINES';
export const RETRIEVED_CUISINES = 'RETRIEVED_CUISINES';

export const requestCuisines = () => ({ type: REQUEST_CUISINES });
export const retrieveCuisines = cuisines => ({
  type: RETRIEVED_CUISINES,
  cuisines: cuisines,
  retrievedAt: Date.now(),
});

export function fetchCuisines() {
  return (dispatch, getState) => {
    dispatch(requestCuisines());
    return axios
      .get('cuisines')
      .then(response => response.data)
      .then(cuisines => dispatch(retrieveCuisines(cuisines)));
  };
}
