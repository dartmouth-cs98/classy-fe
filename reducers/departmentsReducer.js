import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const DepartmentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_DEPARTMENTS:
      return { all: action.payload };
    case ActionTypes.FETCH_DEPARTMENT:
      return { current: action.payload };
    default:
      return state;
  }
};

export default DepartmentsReducer;
