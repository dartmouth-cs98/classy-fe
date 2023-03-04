import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  errors: [],
};

const AuthReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.LOAD_REGISTER:
      return { current: action.payload };
    case ActionTypes.REGISTER:
      return { errors: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
