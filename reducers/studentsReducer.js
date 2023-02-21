import { ActionTypes } from '../actions';

const initialState = {
  student: {},
  friends: [],
};

const StudentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_STUDENT:
      return { ...state, student: action.payload };
    case ActionTypes.FETCH_FRIENDS:
      return { ...state, friends: action.payload };
    case ActionTypes.UPDATE_STUDENT:
      return { ...state, student: action.payload };
    default:
      return state;
  }
};

export default StudentsReducer;
