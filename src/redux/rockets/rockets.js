import * as api from '../../api/api';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKETS = 'RESERVE_ROCKETS';
const CANCEL_RESERVE = 'CANCEL_RESERVE';

// Action creator

export const getRockets = () => async (dispatch) => {
  try {
    const data = await api.fetchRockets();
    dispatch({ type: GET_ROCKETS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKETS,
  payload,
});

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVE,
  payload,
});
const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:

      return action.payload.map((rocket) => {
        const {
          id, rocket_name: names, type, flickr_images: images, description,
        } = rocket;
        return {
          id, names, type, images, description,
        };
      });

    case RESERVE_ROCKETS:
    case CANCEL_RESERVE:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });

    default:
      return state;
  }
};

export default rocketReducer;
