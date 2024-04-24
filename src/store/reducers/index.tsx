import { combineReducers } from 'redux';
import countReducer from './countReducer';

const appReducer = (injectedReducers = {}) => combineReducers({
    countReducer,
    ...injectedReducers
});

export default appReducer;