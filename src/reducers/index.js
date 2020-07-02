import { combineReducers } from 'redux';
import user from './user_reducer';
import company from './company_reducer';

const rootReducer = combineReducers({
  user,
  company,
});

export default rootReducer;
