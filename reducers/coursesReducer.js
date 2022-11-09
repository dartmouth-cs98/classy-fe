import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  searchResults: [],
};

const PostsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_COURSES:
      return { all: action.payload };
    case ActionTypes.FETCH_COURSE:
      return { current: action.payload };
    case ActionTypes.UPDATE_COURSE:
      console.log(action.payload);
      return { current: action.payload };
    case ActionTypes.FETCH_COMMENTS:
      return { current: action.payload };
    case ActionTypes.SEARCH:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
