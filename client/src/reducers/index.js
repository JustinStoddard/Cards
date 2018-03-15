import { combineReducers } from 'redux';
import apps from './cards';

const rootReducer = combineReducers({
  cards,
});

export default rootReducer;
