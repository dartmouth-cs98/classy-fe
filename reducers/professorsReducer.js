import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const ProfessorsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROFESSORS:
      return { all: action.payload };
    case ActionTypes.FETCH_PROFESSOR:
      return { current: action.payload };
    case ActionTypes.UPDATE_PROFESSOR:
      return { current: action.payload };
    case ActionTypes.SEARCH:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default ProfessorsReducer;
