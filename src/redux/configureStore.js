import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({ missions: missionsReducer, rocketsReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
