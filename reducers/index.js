// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CoursesReducer from './coursesReducer';

const rootReducer = combineReducers({
  courses: CoursesReducer,
});

export default rootReducer;
