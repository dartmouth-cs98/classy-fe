import axios from 'axios';
import { ROOT_URL } from './root_url';

export const HomeActionTypes = {
  SEARCH_COURSES: 'SEARCH_COURSES',
};

export const searchCourses = (searchQuery) => (dispatch) => {
  const searchResultsTimestamp = Date.now();

  axios.get(`${ROOT_URL}/search`, {
    params: {
      query: searchQuery,
    },
  }).then((res) => {
    const response = res.data;
    dispatch({
      type: HomeActionTypes.SEARCH_COURSES,
      payload: { searchResultsTimestamp, searchResults: response },
    });
  });
};
