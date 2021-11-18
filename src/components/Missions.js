/* eslint-disable */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';


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


  return (
    <ul>
      {missions.map(({
        id, name, description, reserved,
      }) => (
        <li key={id}>
          <h2 className="fw-bold">{name}</h2>
          <p>{description}</p>
          <p className="align-middle">
            {reserved && <h5>Active Member</h5>}
            {!reserved && <h5>NOT A MEMBER</h5>}
          </p>
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
      <h2>missions</h2>
    </ul>
  );
}

export default Missions;
