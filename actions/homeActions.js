import axios from 'axios';
import { ROOT_URL } from './root_url';

export const HomeActionTypes = {
  FETCH_DROPDOWN_COURSES: 'FETCH_DROPDOWN_COURSES',
  CLEAR_DROPDOWN: 'CLEAR_DROPDOWN',
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

export const clearDropdown = () => (dispatch) => {
  dispatch({
    type: HomeActionTypes.CLEAR_DROPDOWN,
  });
};
