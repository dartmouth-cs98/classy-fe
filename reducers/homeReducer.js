import { ActionTypes } from '../actions';

const initialState = {
  searchResults: [],
  searchResultsTimestamp: Date.now(),
};

const HomeReducer = (state = initialState, action = {}) => {
  // console.log(action.type);
  switch (action.type) {
    case ActionTypes.SEARCH_COURSES:
      if (action.payload.searchResultsTimestamp >= state.searchResultsTimestamp) {
        return { ...state, ...action.payload };
      }
      return state;
    default:
      return state;
  }
};

export default HomeReducer;
