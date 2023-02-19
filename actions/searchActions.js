import axios from 'axios';
import { ROOT_URL } from './root_url';

export const SearchActionTypes = {
  FETCH_SEARCH: 'FETCH_SEARCH',
  ADD_DISTRIB_FILTER: 'ADD_DISTRIB_FILTER',
  ADD_WC_FILTER: 'ADD_WC_FILTER',
  REMOVE_DISTRIB_FILTER: 'REMOVE_DISTRIB_FILTER',
  REMOVE_WC_FILTER: 'REMOVE_WC_FILTER',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
};

// never called directly, implicitly called by setSearchQuery, addDistribFilter,
// removeDistribFilter, addWcFilter, removeWcFilter
export const fetchSearch = () => (dispatch, getState) => {
  const searchResultsTimestamp = Date.now();
  const { searchQuery } = getState().search;

  axios.get(`${ROOT_URL}/search`, {
    params: {
      query: searchQuery,
    },
  }).then((res) => {
    const response = res.data;
    dispatch({
      type: SearchActionTypes.FETCH_SEARCH,
      payload: { searchResultsTimestamp, searchResults: response },
    });
  });
};

export const setSearchQuery = (searchQuery) => (dispatch) => {
  dispatch({
    type: SearchActionTypes.SET_SEARCH_QUERY,
    payload: { searchQuery },
  });
  dispatch(fetchSearch());
};

export const addDistribFilter = (distrib) => (dispatch) => {
  dispatch({
    type: SearchActionTypes.ADD_DISTRIB_FILTER,
    payload: distrib,
  });
  dispatch(fetchSearch());
};

export const removeDistribFilter = (distrib) => (dispatch) => {
  dispatch({
    type: SearchActionTypes.REMOVE_DISTRIB_FILTER,
    payload: distrib,
  });
  dispatch(fetchSearch());
};

export const addWcFilter = (distrib) => (dispatch) => {
  dispatch({
    type: SearchActionTypes.ADD_WC_FILTER,
    payload: distrib,
  });
  dispatch(fetchSearch());
};

export const removeWcFilter = (distrib) => (dispatch) => {
  dispatch({
    type: SearchActionTypes.REMOVE_WC_FILTER,
    payload: distrib,
  });
  dispatch(fetchSearch());
};
