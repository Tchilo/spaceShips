import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

function Rockets() {
  const rocketStore = useSelector((state) => state.rocketReducer);
  // const [showResrved, setshowReserved] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rocketStore.length) {
      dispatch(getRockets());
    }
  }, []);
  return (
    rocketStore.map((rocket) => {
      const {
        id, images, names, description,
      } = rocket;
      return (
        <ul key={id}>
          <li key={id}>
            <img src={images[0]} alt={names} />
            {rocket.names}
            {' '}
            <p>{description}</p>
            <button type="button">Rocket Reserve</button>
            <button type="button">Cancel Reservation </button>
          </li>
        </ul>
      );
    })
  );
}

export default Rockets;
