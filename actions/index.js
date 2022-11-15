import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_COURSES: 'FETCH_COURSES',
  FETCH_COURSE: 'FETCH_COURSE',
  UPDATE_COURSE: 'UPDATE_COURSE',
  CREATE_COURSE: 'CREATE_COURSE',
  DELETE_COURSE: 'DELETE_COURSE',
  FETCH_PROFESSORS: 'FETCH_PROFESSORS',
  FETCH_PROFESSOR: 'FETCH_PROFESSOR',
  UPDATE_PROFESSOR: 'UPDATE_PROFESSOR',
  CREATE_PROFESSOR: 'CREATE_PROFESSOR',
  DELETE_PROFESSOR: 'DELETE_PROFESSOR',
  FETCH_EXPLORE: 'FETCH_EXPLORE',
  FETCH_SEARCH: 'FETCH_SEARCH',
  FETCH_WAITLIST: 'FETCH_WAITLIST',
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

export const fetchCourse = (dept, num) => (dispatch) => {
  axios.get(`${ROOT_URL}/courses/${dept}/${num}`)
    .then((res) => {
      const response = res.data;
      dispatch({
        type: ActionTypes.FETCH_COURSE,
        payload: response,
      });
    });
};

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

export function fetchProfessors() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/professors`);
      dispatch({ type: ActionTypes.FETCH_COURSES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export const fetchProfessor = (name) => (dispatch) => {
  axios.get(`${ROOT_URL}/professors/${name}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_PROFESSOR,
      payload: response,
    });
  });
};

export const fetchExplore = () => (dispatch) => {
  axios.get(`${ROOT_URL}/explore`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_EXPLORE,
      payload: response,
    });
  });
};

export const fetchSearch = () => (dispatch) => {
  axios.get(`${ROOT_URL}/search`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_SEARCH,
      payload: response,
    });
  });
};

export const fetchWaitlist = () => (dispatch) => {
  axios.get(`${ROOT_URL}/waitlist/`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_WAITLIST,
      payload: response,
    });
  });
};

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
