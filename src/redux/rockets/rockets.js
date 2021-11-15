/* eslint-disable */
import axios from 'axios';

const GET_ROCKETS = 'GET_ROCKETS';

const getRockets = (payload) => ({ type: GET_ROCKETS, payload });

const rocketsReducer = (state = [], actions) => {
    switch (actions.type) {
        case GET_ROCKETS:
            return [...state, actions.payload];
        default:
            return state;
    }
};

export const fetchRockets = (dispatch) => {
    axios
        .get('https://api.spacexdata.com/v3/rockets')
        .then((res) => {
            console.log(res);
            dispatch(getRockets(res));
        })
        .catch((err) => console.log(err));
};

export default rocketsReducer;
