/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleMission from './SingleMission';
import { fetchMissions } from '../redux/missions/missions';

function Missions() {
  const missions = useSelector((state) => state.missionsReducer.data);
  // const missions = missions1[0];
  // const isloading = useSelector((state) => state.missionsReducer.isloading)
  const dispatch = useDispatch();
  useEffect(() => {
    // if (isloading == true) {
    dispatch(fetchMissions());
    // }
  }, []);
  // console.log(missions.map((mission) => mission.mission_id));
  return (
    <div>
      {missions.map((m) =>
        <SingleMission
          mission_name={m.mission_name}
          key={m.mission_id}
          // key={m.mission_id}
          description={m.description}
        />
      )}
      <h2>missions</h2>
    </div>
  );
}

export default Missions;
