import * as api from '../../api/api';

const GET_ROCKETS = 'GET_ROCKETS';

// Action creator

export const getRockets = () => async (dispatch) => {
  try {
    const data = await api.fetchRockets();
    dispatch({ type: GET_ROCKETS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

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

    default:
      return state;
  }
};

export default rocketReducer;
