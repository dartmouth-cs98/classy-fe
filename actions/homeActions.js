import axios from 'axios';
import { ROOT_URL } from './root_url';

export const HomeActionTypes = {
  FETCH_DROPDOWN_COURSES: 'FETCH_DROPDOWN_COURSES',
  FETCH_DROPDOWN_MAJORMINOR: 'FETCH_DROPDOWN_MAJORMINOR',
  CLEAR_DROPDOWN: 'CLEAR_DROPDOWN',
  CLEAR_MAJORMINOR_DROPDOWN: 'CLEAR_MAJORMINOR_DROPDOWN',
};

export const fetchDropDownCourses = (searchQuery) => (dispatch) => {
  const searchResultsTimestamp = Date.now();

  axios.get(`${ROOT_URL}/search`, {
    params: {
      query: searchQuery,
      distribFilters: [],
      wcFilters: [],
      offeredNext: false,
      nrEligible: false,
    },
  }).then((res) => {
    const response = res.data;
    // console.log(response);
    dispatch({
      type: HomeActionTypes.FETCH_DROPDOWN_COURSES,
      payload: { searchResultsTimestamp, searchResults: response },
    });
  });
};

export const clearMajorMinorDropdown = () => (dispatch) => {
  dispatch({
    type: HomeActionTypes.CLEAR_DROPDOWN,
  });
};

export const fetchDropDownMajorMinor = (searchQuery) => (dispatch) => {
  const searchMajorMinorResultsTimestamp = Date.now();

  axios.get(`${ROOT_URL}/searchDepartments`, {
    params: {
      query: searchQuery,
    },
  }).then((res) => {
    const response = res.data;
    // console.log(response);
    dispatch({
      type: HomeActionTypes.FETCH_DROPDOWN_MAJORMINOR,
      payload: { searchMajorMinorResultsTimestamp, searchMajorMinorResults: response },
    });
  });
};

export const clearDropdown = () => (dispatch) => {
  dispatch({
    type: HomeActionTypes.CLEAR_MAJORMINOR_DROPDOWN,
  });
};
