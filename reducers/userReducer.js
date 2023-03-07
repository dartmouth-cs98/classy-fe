import { ActionTypes } from '../actions';
import { AuthActionTypes } from '../actions/authActions';

const initialState = {
  user: {},
};

const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return { ...state, user: action.payload };
    case ActionTypes.UPDATE_USER:
      return { ...state, user: action.payload };
    case AuthActionTypes.LOGIN:
      return { ...state, user: action.payload };
    case AuthActionTypes.REGISTER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
