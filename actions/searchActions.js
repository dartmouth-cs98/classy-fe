/* eslint-disable no-unused-vars */
import axios from 'axios';
import { ROOT_URL } from './root_url';

export const SearchActionTypes = {
  FETCH_SEARCH: 'FETCH_SEARCH',
  FETCH_SEARCH_PROFS: 'FETCH_SEARCH_PROFS',
  FETCH_SEARCH_STUDENTS: 'FETCH_SEARCH_STUDENTS',
  FETCH_DEPARTMENT: 'FETCH_DEPARTMENT',
  CLEAR_DEPARTMENT: 'CLEAR_DEPARTMENT',
  FETCH_DEPARTMENTS: 'FETCH_DEPARTMENTS',
  ADD_DISTRIB_FILTER: 'ADD_DISTRIB_FILTER',
  ADD_WC_FILTER: 'ADD_WC_FILTER',
  REMOVE_DISTRIB_FILTER: 'REMOVE_DISTRIB_FILTER',
  REMOVE_WC_FILTER: 'REMOVE_WC_FILTER',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  TOGGLE_OFFERED_NEXT: 'TOGGLE_OFFERED_NEXT',
  TOGGLE_NR_ELIGIBLE: 'TOGGLE_NR_ELIGIBLE',
  // CLEAR_SEARCH_RESULTS: 'CLEAR_SEARCH_RESULTS',
  SET_TAB: 'SET_TAB',
};

// never called directly, implicitly called by setSearchQuery, addDistribFilter,
// removeDistribFilter, addWcFilter, removeWcFilter, and toggle functions
export const fetchSearch = () => (dispatch, getState) => {
  const searchResultsTimestamp = Date.now();
  const {
    searchQuery, distribFilters, wcFilters, offeredNext, nrEligible,
  } = getState().search;

  // console.log(distribFilters);
  axios.get(`${ROOT_URL}/search`, {
    params: {
      query: searchQuery,
      distribFilters: distribFilters.map((distrib) => distrib.name),
      wcFilters: wcFilters.map((wc) => wc.name),
      offeredNext,
      nrEligible,
    },
  }).then((res) => {
    const response = res.data;
    dispatch({
      type: SearchActionTypes.FETCH_SEARCH,
      payload: { searchResultsTimestamp, searchResults: response },
    });
  });
};

export const fetchProfSearch = () => (dispatch, getState) => {
  const searchProfResultsTimestamp = Date.now();
  const {
    searchQuery,
  } = getState().search;

  // console.log('here');
  axios.get(`${ROOT_URL}/searchProfs`, {
    params: {
      query: searchQuery,
    },
  }).then((res) => {
    const response = res.data;
    // console.log(response);
    dispatch({
      type: SearchActionTypes.FETCH_SEARCH_PROFS,
      payload: { searchProfResultsTimestamp, searchProfResults: response },
    });
  });
};

export const fetchStudentSearch = () => (dispatch, getState) => {
  const searchResultsTimestamp = Date.now();
  const {
    searchQuery, distribFilters, wcFilters, offeredNext, nrEligible,
  } = getState().search;

  // console.log(distribFilters);
  axios.get(`${ROOT_URL}/search`, {
    params: {
      query: searchQuery,
      distribFilters: distribFilters.map((distrib) => distrib.name),
      wcFilters: wcFilters.map((wc) => wc.name),
      offeredNext,
      nrEligible,
    },
  }).then((res) => {
    const response = res.data;
    dispatch({
      type: SearchActionTypes.FETCH_SEARCH_STUDENTS,
      payload: { searchResultsTimestamp, searchResults: response },
    });
  });
};

// export const clearSearchResults = () => (dispatch) => {
//   dispatch({
//     type: SearchActionTypes.CLEAR_SEARCH_RESULTS,
//   });
// };

export const setTab = (tab) => (dispatch) => {
  dispatch({
    type: SearchActionTypes.SET_TAB,
    payload: tab,
  });
};

export const setSearchQuery = (searchQuery) => (dispatch, getState) => {
  const {
    tab,
  } = getState().search;
  dispatch({
    type: SearchActionTypes.SET_SEARCH_QUERY,
    payload: { searchQuery },
  });
  // if (tab === 'Courses') {
  dispatch(fetchSearch());
  // } else if (tab === 'Professors') {
  dispatch(fetchProfSearch());
  // } else if (tab === 'Students') {
  dispatch(fetchStudentSearch());
  // }
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

export const toggleOfferedNext = () => (dispatch) => {
  dispatch({
    type: SearchActionTypes.TOGGLE_OFFERED_NEXT,
  });
  dispatch(fetchSearch());
};

export const toggleNrEligible = () => (dispatch) => {
  dispatch({
    type: SearchActionTypes.TOGGLE_NR_ELIGIBLE,
  });
  dispatch(fetchSearch());
};

export const fetchDepartments = () => (dispatch) => {
  axios.get(`${ROOT_URL}/departments`).then((res) => {
    const response = res.data;
    dispatch({
      type: SearchActionTypes.FETCH_DEPARTMENTS,
      payload: { departments: response },
    });
  });
};

export const clearDepartment = () => (dispatch) => {
  console.log('clearing');
  dispatch({
    type: SearchActionTypes.CLEAR_DEPARTMENT,
  });
};

export const fetchDepartment = (deptID) => (dispatch) => {
  // console.log(deptID);
  axios.get(`${ROOT_URL}/departments/${deptID}`).then((res) => {
    const response = res.data;
    // console.log(response);
    dispatch({
      type: SearchActionTypes.FETCH_DEPARTMENT,
      payload: response,
    });
  });
};
