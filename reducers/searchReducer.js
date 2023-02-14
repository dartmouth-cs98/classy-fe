import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  searchResults: [],
  timestamp: Date.now(),
};

const SearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH:
      if (action.payload.timestamp >= state.timestamp) {
        return { ...state, ...action.payload };
      }
      return state;
    default:
      return state;
  }
};

export default SearchReducer;
