import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  searchResults: [],
};

const WaitlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_WAITLISTS:
      return { current: action.payload };
    case ActionTypes.FETCH_WAITLIST:
      return { current: action.payload };
    default:
      return state;
  }
};

export default WaitlistReducer;
