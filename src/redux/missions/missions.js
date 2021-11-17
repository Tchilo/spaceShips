/* eslint-disable */
import axios from 'axios';

const GET_MISSIONS = 'GET_MISSIONS';

const getMissions = (payload) => ({ type: GET_MISSIONS, payload });

const missionsReducer = (state = [], actions) => {
    switch (actions.type) {
        case GET_MISSIONS:
            return [...state, actions.payload];
        default:
            return state;
    }
};

export const fetchMissions = (dispatch) => {
    axios
        .get('https://api.spacexdata.com/v3/missions')
        .then((res) => {
            // console.log(res.data);
            dispatch(getMissions(res.data));
        })
        .catch((err) => console.log(err));
};

export default missionsReducer;
