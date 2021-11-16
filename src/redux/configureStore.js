import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({ missionsReducer, rocketReducer });

const store = createStore(reducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
