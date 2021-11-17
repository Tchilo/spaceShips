import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation, getRockets, reserveRocket } from '../redux/rockets/rockets';

function Rockets() {
  const rocketStore = useSelector((state) => state.rocketReducer);
  const [showResrved, setshowReserved] = useState(true);
  const dispatch = useDispatch();
  const handleReserve = (id) => dispatch(reserveRocket(id));
  const handleCancel = (id) => dispatch(cancelReservation(id));

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
            {(showResrved && (
            <button
              type="button"
              onClick={(id) => {
                setshowReserved(false);
                handleReserve(id);
              }}
            >
              Rocket Reserve
            </button>
            ))}
            {(!showResrved && (
            <button
              type="button"
              onClick={(id) => {
                setshowReserved(true);
                handleCancel(id);
              }}
            >
              Cancel Reservation
            </button>
            ))}
          </li>
        </ul>

      );
    })
  );
}

export default Rockets;
