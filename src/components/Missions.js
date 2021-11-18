/* eslint-disable */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';
import '../styles/missions.css';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  const handleJoin = (id) => dispatch(joinMission(id));
  const handleLeave = (id) => dispatch(leaveMission(id));

  console.log(missions)
  return (
    <ul className="table">
      {missions.map(({
        id, name, description, reserved,
      }) => (
        <li key={id}>
          <h2 className="fw-bold">{name}</h2>
          <p>{description}</p>
          <ul className="align-middle">
            {reserved && <h5>Active Member</h5>}
            {!reserved && <h5>NOT A MEMBER</h5>}
          </ul>
          {reserved && (
            <button
              onClick={() => handleLeave(id)}
            >
              Leave Mission
            </button>
          )}
          {!reserved && (
            <button
              onClick={() => handleJoin(id)}
            >
              Join Mission
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Missions;
