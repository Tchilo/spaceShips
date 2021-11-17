/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Profile() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);
  const reservedMissions = missions.filter((mission) => mission.reserved === true && mission);
  return (
    <div >
      {
        reservedMissions.length
          ? (
            <>
              <h2>My Missions</h2>
              <ul>
                {reservedMissions.map((mission) => (
                  <li key={mission.id}>
                    {mission.name}
                  </li>
                ))}
              </ul>

            </>
          )
          : (
            <h2>There are no missions reserved</h2>
          )
      }
    </div>
  );
}

export default Profile;
