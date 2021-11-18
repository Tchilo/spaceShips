/* eslint-disable no-case-declarations */
// import * as api from '../../api/api';

const url = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKETS';
const FETCHING_ROCKETS_FAILED = 'FETCHING_ROCKETS_FAILED';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const initialState = {
  rockets: [],
};

const loadRockets = (rockets) => ({
  type: GET_ROCKETS,
  payload: rockets,
});

export const reserve = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

const fetchingDataFailed = (err) => ({
  type: FETCHING_ROCKETS_FAILED,
  payload: err,
});

export const fetchRockets = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const rockets = await response.json();
    dispatch(
      loadRockets(
        rockets.map((rocket) => {
          const {
            id, rocket_name: names, flickr_images: images, description,
          } = rocket;
          return {
            id, names, images, description,
          };
        }),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred, please try again later';
    dispatch(fetchingDataFailed(err.description));
  }
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return {
        ...state,
        rockets: action.payload,
      };

    case FETCHING_ROCKETS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESERVE_ROCKET:
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload.id) { return rocket; }
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newState,
      };
    case CANCEL_RESERVATION:
      const nextState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload.id) { return rocket; }
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: nextState,
      };
    default:
      return state;
  }
};

export default rocketReducer;
