import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';
import '../styles/missions.css';

const Missions = () => {
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
    <div className="missions">
      <table>
        <thead key="1">
          <tr>
            <th className="tableHeader">Mission</th>
            <th className="tableHeader">Description</th>
            <th className="tableHeader">Status</th>
            <th aria-label="join mission" />
          </tr>
        </thead>
        <tbody>

          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id}>
              <td>
                <h2 className="fw-bold">{name}</h2>

              </td>
              <td>
                <p>{description}</p>
              </td>

              <td>
                <ul className="align-middle">
                  {reserved && <h5 className="member">Active Member</h5>}
                  {!reserved && <h5 className="nMember">NOT A MEMBER</h5>}
                </ul>
              </td>

              <td>

                <div key={id}>

                  {reserved && (
                    <button
                      onClick={() => handleLeave(id)}
                      className="leave"
                      type="button"

                    >
                      Leave Mission
                    </button>
                  )}
                  {!reserved && (
                    <button
                      onClick={() => handleJoin(id)}
                      type="button"
                    >
                      Join Mission
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Missions;
