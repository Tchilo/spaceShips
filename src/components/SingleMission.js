/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import joinMission from '../redux/missions/missions';
function SingleMission({ mission_name, description, joinMissions, mission_id, reserved, missions }) {
    const dispatch = useDispatch()
    const clickHandler = (id) => dispatch(joinMission(mission_id));

    return (
        <div >
            <h2>{mission_name}</h2>
            <p>{description}</p>
            <button type="button" onClick={clickHandler} >{joinMissions}</button>
        </div>
    );
}

export default SingleMission;
