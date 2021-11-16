/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleMission from './SingleMission';
import { fetchMissions } from '../redux/missions/missions';

function Missions() {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  console.log(typeof (missions));
  console.log(missions);
  return (
    <div>
      {missions.map((mission) =>
        <SingleMission
          mission_name={mission.mission_name}
          key={mission.mission_id}

        />

      )}
    </div>
  );
}

export default Missions;
