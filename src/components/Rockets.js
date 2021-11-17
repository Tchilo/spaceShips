/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation, fetchRockets, reserve } from '../redux/rockets/rockets';

function Rockets() {
  const rocketReducer = useSelector((state) => state.rockets.rockets);
  const [showResrved, setshowReserved] = useState(true);
  const dispatch = useDispatch();
  const handleReserve = (id) => dispatch(reserve(id));
  const handleCancel = (id) => dispatch(cancelReservation(id));

  useEffect(() => {
    if (!rocketReducer.length) {
      dispatch(fetchRockets());
    }
  }, []);

  console.log(rocketReducer)
  return (
    <div>
      {rocketReducer.map((rocket) => {
        const {
          id, images, names, description,
        } = rocket;
        return (

          <ul key={id}>
            <li key={id}>
              <img src={images[0]} alt={names} />
              {rocket.names}
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
      })}
    </div>
  )
}

export default Rockets;
