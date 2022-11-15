// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CoursesReducer from './coursesReducer';
import ExploreReducer from './exploreReducer';
import ProfessorsReducer from './professorsReducer';

const rootReducer = combineReducers({
  courses: CoursesReducer,
  professors: ProfessorsReducer,
  explore: ExploreReducer,
});

export default rootReducer;
