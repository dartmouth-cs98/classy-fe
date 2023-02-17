import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const HomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_HOME:
      return { current: action.payload };
    default:
      return state;
  }
};

export default HomeReducer;
