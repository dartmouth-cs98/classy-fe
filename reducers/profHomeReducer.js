import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const ProfHomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROFESSOR_HOME:
      return { current: action.payload };
    default:
      return state;
  }
};

export default ProfHomeReducer;
