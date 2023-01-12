import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const ReviewsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_REVIEWS:
      return { all: action.payload };
    case ActionTypes.FETCH_REVIEW:
      return { current: action.payload };
    case ActionTypes.FETCH_DEPT_REVIEWS:
      return { deptReviews: action.payload };
    case ActionTypes.UPDATE_REVIEW:
      return { current: action.payload };
    case ActionTypes.CREATE_REVIEW:
      return { current: action.payload };
    default:
      return state;
  }
};

export default ReviewsReducer;
