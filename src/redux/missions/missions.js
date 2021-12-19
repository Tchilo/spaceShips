/* eslint-disable no-case-declarations */
const URL = 'https://api.spacexdata.com/v3/missions';
const LOAD_MISSIONS = 'missions/loaded';
const JOIN_MISSION = 'missions/join';
const LEAVE_MISSION = 'missions/leave';
const FETCHING_MISSIONS_FAILED = 'missions/fetchingFailed';

const initialState = {
  missions: [],
  error: '',
};

const loadMissions = (missions) => ({
  type: LOAD_MISSIONS,
  payload: missions,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const fetchingDataFailed = (err) => ({
  type: FETCHING_MISSIONS_FAILED,
  payload: err,
});

export const fetchMissions = async (dispatch) => {
  try {
    const response = await fetch(URL);
    const missions = await response.json();

    dispatch(
      loadMissions(
        missions.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        })),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred, please try again later';
    dispatch(fetchingDataFailed(err.description));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };
    case FETCHING_MISSIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case JOIN_MISSION:
      const newState = state.missions.map((mission) => {
        if (mission.id !== action.id) { return mission; }
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        missions: newState,
      };
    case LEAVE_MISSION:
      const nextState = state.missions.map((mission) => {
        if (mission.id !== action.id) { return mission; }
        return { ...mission, reserved: false };
      });
      return {
        ...state,
        missions: nextState,
      };
    default:
      return state;
  }
};

export default reducer;
