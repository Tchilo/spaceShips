import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation, fetchRockets, reserve } from '../redux/rockets/rockets';
import '../styles/rocket.css';

function Rockets() {
  const rocketReducer = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  const handleReserve = (id) => dispatch(reserve(id));
  const handleCancel = (id) => dispatch(cancelReservation(id));

  useEffect(() => {
    if (!rocketReducer.length) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div className="rockets-container d-flex grid">
      {rocketReducer.map((rocket) => {
        const {
          id, images, names, description, reserved,
        } = rocket;
        return (

          <div className="rockets-container d-flex" key={id}>
            <div className="img-container">
              <img src={images[0]} alt={names} />

            </div>

            <h2 className="rocket-name">
              {rocket.names}
              {' '}
            </h2>

            <p className="rocket-description">
              <button type="button" className="reserve">
                {reserved && <h5>Reserved</h5>}
              </button>
              <span className="description-span">
                {description}
              </span>
            </p>
            <div className="btns">

              {(!reserved && (
                <button
                  className="reserve-btn"
                  type="button"
                  onClick={() => {
                    handleReserve(id);
                  }}
                >
                  Rocket Reserve
                </button>
              ))}
              {(reserved && (
                <button
                  type="button"
                  className="c-btn"
                  onClick={() => {
                    handleCancel(id);
                  }}
                >
                  Cancel Reservation
                </button>
              ))}
            </div>

          </div>

        );
      })}
    </div>
  );
}

export default Rockets;
