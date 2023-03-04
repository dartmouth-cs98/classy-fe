import { ActionTypes } from '../actions';

const initialState = {
  distribFilters: [],
  wcFilters: [],
  searchResults: [],
  searchProfResults: [],
  searchResultsTimestamp: Date.now(),
  searchProfResultsTimestamp: Date.now(),
  searchQuery: '',
  offeredNext: false,
  nrEligible: false,
  departments: [],
  currentDepartment: {},
  tab: 'Courses',
};

const SearchReducer = (state = initialState, action = {}) => {
  // console.log(action.type);
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH:
      if (action.payload.searchResultsTimestamp >= state.searchResultsTimestamp) {
        return { ...state, ...action.payload };
      }
      return state;
    case ActionTypes.FETCH_SEARCH_PROFS:
      console.log('here');
      if (action.payload.searchProfResultsTimestamp >= state.searchProfResultsTimestamp) {
        console.log('here');
        return { ...state, ...action.payload };
      }
      return state;
    case ActionTypes.FETCH_DEPARTMENT:
      return { ...state, currentDepartment: action.payload };
    case ActionTypes.CLEAR_DEPARTMENT:
      return { ...state, currentDepartment: {} };
    case ActionTypes.FETCH_DEPARTMENTS:
      return { ...state, departments: action.payload.departments };
    case ActionTypes.ADD_DISTRIB_FILTER:
      if (!state.distribFilters.includes(action.payload)) {
        return { ...state, distribFilters: [...state.distribFilters, action.payload] };
      }
      return { ...state };
    case ActionTypes.REMOVE_DISTRIB_FILTER:
      return {
        ...state,
        distribFilters:
        state.distribFilters.filter((distrib) => distrib.name !== action.payload.name),
      };
    case ActionTypes.ADD_WC_FILTER:
      if (!state.wcFilters.includes(action.payload)) {
        return { ...state, wcFilters: [...state.wcFilters, action.payload] };
      }
      return { ...state };
    case ActionTypes.REMOVE_WC_FILTER:
      return {
        ...state,
        wcFilters:
        state.wcFilters.filter((distrib) => distrib.name !== action.payload.name),
      };
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload.searchQuery };
    case ActionTypes.TOGGLE_NR_ELIGIBLE:
      return { ...state, nrEligible: !state.nrEligible };
    case ActionTypes.TOGGLE_OFFERED_NEXT:
      return { ...state, offeredNext: !state.offeredNext };
    case ActionTypes.SET_TAB:
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};

export default SearchReducer;
