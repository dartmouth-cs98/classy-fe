import { ActionTypes } from '../actions';

const initialState = {
  searchResults: [],
  searchResultsTimestamp: Date.now(),
};

const HomeReducer = (state = initialState, action = {}) => {
  // console.log(action.type);
  switch (action.type) {
    case ActionTypes.FETCH_DROPDOWN_COURSES:
      console.log(action.payload);
      if (action.payload.searchResultsTimestamp >= state.searchResultsTimestamp) {
        return { ...state, ...action.payload };
      }
      return state;
    case ActionTypes.CLEAR_DROPDOWN:
      return { ...state, searchResults: [] };
    default:
      return state;
  }
};

export default HomeReducer;
