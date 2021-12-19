import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import { fetchRockets } from '../redux/rockets/rockets';
import '../styles/profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true && rocket);
  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
      dispatch(fetchRockets);
    }
  }, []);
  const reservedMissions = missions.filter((mission) => mission.reserved === true && mission);
  return (
    <section>
      <div className="container">
        {
          reservedRockets.length
            ? (
              <>
                <h2>My Rockets</h2>
                <ul className="items">
                  {reservedRockets.map((rocket) => (
                    <li key={rocket.id}>
                      {rocket.names}
                    </li>
                  ))}
                </ul>

              </>
            )
            : (
              <h2 className="none-reserved">There are no rockets reserved</h2>
            )
        }
      </div>
      <div className="container">
        {
          reservedMissions.length
            ? (
              <>
                <h2>My Missions</h2>
                <ul className="items">
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
    </section>
  );
};

export default Profile;
