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

  console.log(missions);
  return (
    <div className="missions">
      <div>
        <div key="1">
          <ul>
            <li className="tableHeader">Mission</li>
            <li className="tableHeader">Description</li>
            <li className="tableHeader">Status</li>
            <li aria-label="join mission" />
          </ul>
        </div>
        <div>

          {missions.map(({
            id, name, description, reserved,
          }) => (
            <ul key={id}>
              <li>
                <h2 className="fw-bold">{name}</h2>

              </li>
              <li>
                <p>{description}</p>
              </li>

              <li>
                <ul className="align-middle">
                  {reserved && <h5 className="member">Active Member</h5>}
                  {!reserved && <h5 className="nMember">NOT A MEMBER</h5>}
                </ul>
              </li>

              <li>

                <div key={id}>

                  {reserved && (
                    <button
                      type="button"
                      onClick={() => handleLeave(id)}
                      className="leave"
                    >
                      Leave Mission
                    </button>
                  )}
                  {!reserved && (
                    <button
                      type="button"
                      onClick={() => handleJoin(id)}
                      className=""
                    >
                      Join Mission
                    </button>
                  )}
                </div>
              </li>
            </ul>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Missions;
