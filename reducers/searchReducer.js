import { ActionTypes } from '../actions';

const initialState = {
  distribFilters: [],
  wcFilters: [],
  searchResults: [],
  searchResultsTimestamp: Date.now(),
  searchQuery: '',
};

const SearchReducer = (state = initialState, action = {}) => {
  // console.log(action.type);
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH:
      if (action.payload.searchResultsTimestamp >= state.searchResultsTimestamp) {
        return { ...state, ...action.payload };
      }
      return state;
    case ActionTypes.ADD_DISTRIB_FILTER:
      // console.log(action.payload);
      return { ...state, distribFilters: [...state.distribFilters, action.payload] };
    case ActionTypes.REMOVE_DISTRIB_FILTER:
      return {
        ...state,
        distribFilters:
        state.distribFilters.filter((distrib) => distrib.name !== action.payload.name),
      };
    case ActionTypes.ADD_WC_FILTER:
      // console.log(action.payload);
      return { ...state, wcFilters: [...state.wcFilters, action.payload] };
    case ActionTypes.REMOVE_WC_FILTER:
      return {
        ...state,
        wcFilters:
        state.wcFilters.filter((distrib) => distrib.name !== action.payload.name),
      };
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload.searchQuery };
    default:
      return state;
  }
};

export default SearchReducer;
