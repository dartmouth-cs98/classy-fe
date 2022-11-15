import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  searchResults: [],
};

const ExploreReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_EXPLORE:
      return { current: action.payload };
    case ActionTypes.UPDATE_EXPLORE:
      return { current: action.payload };
    case ActionTypes.SEARCH:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default ExploreReducer;
