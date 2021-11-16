/* eslint-disable */
import { useSelector } from 'react-redux';

import axios from 'axios';

const GET_MISSIONS = 'GET_MISSIONS';

const getMissions = (payload) => ({
    type: GET_MISSIONS,
    payload
});


const missionsReducer = (state = { data: [] }, actions) => {
    switch (actions.type) {
        case GET_MISSIONS:
            return { ...state, data: actions.payload };
        default:
            return state;
    }
};

export const fetchMissions = () => async (dispatch) => {
    await axios
        .get('https://api.spacexdata.com/v3/missions')
        .then((res) => {
            const missions = res.data;
            console.log(missions)
            dispatch(getMissions(missions));
        })
        .catch((err) => console.log(err));
};

export default missionsReducer;
