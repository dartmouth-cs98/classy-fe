import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/';

// keys for actiontypes
export const ActionTypes = {
  FETCH_COURSES: 'FETCH_COURSES',
  FETCH_COURSE: 'FETCH_COURSE',
  UPDATE_COURSE: 'UPDATE_COURSE',
  CREATE_COURSE: 'CREATE_COURSE',
  DELETE_COURSE: 'DELETE_COURSE',
  SEARCH: 'SEARCH',
};

// trying this out in async await format
export function fetchCourses() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/courses`);
      dispatch({ type: ActionTypes.FETCH_COURSES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchCourse(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/courses/${id}`);
      dispatch({ type: ActionTypes.FETCH_COURSE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateCourse(id, post) {
  console.log('UPDATING COURSE WITH', id);
  return (dispatch) => {
    axios.put(`${ROOT_URL}/courses/${id}`, post).then((response) => {
      dispatch({
        type: ActionTypes.UPDATE_COURSE,
        payload: response.data,
      });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createCourse(post, navigate) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/courses/new`, post).then((response) => {
      dispatch({
        type: ActionTypes.CREATE_COURSE,
        payload: response.data,
      });
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function deleteCourse(id, navigate) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/courses/${id}`).then((response) => {
      dispatch({
        type: ActionTypes.DELETE_COURSE,
        payload: null,
      });
      navigate('/');
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function search(query, navigate) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/search/courses/${query}`).then((response) => {
      dispatch({
        type: ActionTypes.SEARCH,
        payload: response.data,
      });
      console.log(navigate);
    }).catch((error) => {
      console.log(error);
    });
  };
}
