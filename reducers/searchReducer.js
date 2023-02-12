import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  searchResults: [],
};

const SearchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH:
      return { ...state, searchResults: [...action.payload] };
    default:
      return state;
  }
};

export default SearchReducer;
