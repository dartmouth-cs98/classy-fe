import axios from 'axios';
import ROOT_URL from './rootURL';
import ActionTypes from './types';

// trying this out in async await format
export const fetchCourses = () => (dispatch) => {
  axios.get(`${ROOT_URL}/courses`).then((res) => {
    const response = res.data;
    console.log('fetching courses now');
    dispatch({
      type: ActionTypes.FETCH_COURSES,
      payload: response,
    });
  });
};

export const fetchRandomCourses = (count) => (dispatch) => {
  axios.get(`${ROOT_URL}/courses/random/${count}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_RANDOM_COURSES,
      payload: response,
    });
  });
};

export const fetchCourse = (dept, num) => (dispatch) => {
  axios.get(`${ROOT_URL}/courses/${dept}/${num}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_COURSE,
      payload: response,
    });
  });
};

export function updateCourse(id, post) {
  return (dispatch) => {
    axios
      .put(`${ROOT_URL}/courses/${id}`, post)
      .then((response) => {
        dispatch({
          type: ActionTypes.UPDATE_COURSE,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function createCourse(post, navigate) {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/courses/new`, post)
      .then((response) => {
        dispatch({
          type: ActionTypes.CREATE_COURSE,
          payload: response.data,
        });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteCourse(id, navigate) {
  return (dispatch) => {
    axios
      .delete(`${ROOT_URL}/courses/${id}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.DELETE_COURSE,
          payload: null,
        });
        navigate('/');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function search(query, navigate) {
  return (dispatch) => {
    axios
      .get(`${ROOT_URL}/search/courses/${query}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.SEARCH,
          payload: response.data,
        });
        console.log(navigate);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
