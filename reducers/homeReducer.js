import { ActionTypes } from '../actions';

const initialState = {
  searchResults: [],
  searchMajorMinorResults: [],
  searchResultsTimestamp: Date.now(),
  searchMajorMinorResultsTimestamp: Date.now(),
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
    case ActionTypes.FETCH_DROPDOWN_MAJORMINOR:
      console.log(action.payload);
      if (action.payload.searchMajorMinorResultsTimestamp
        >= state.searchMajorMinorResultsTimestamp) {
        return { ...state, ...action.payload };
      }
      return state;
    case ActionTypes.CLEAR_MAJORMINOR_DROPDOWN:
      return { ...state, searchMajorMinorResults: [] };
    default:
      return state;
  }
};

export default HomeReducer;
