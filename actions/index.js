import axios from 'axios';
import { ROOT_URL } from './root_url';
import { SearchActionTypes } from './searchActions';
import { HomeActionTypes } from './homeActions';

export * from './searchActions';
export * from './homeActions';

// keys for actiontypes
export const ActionTypes = {
  FETCH_USER: 'FETCH_USER',
  UPDATE_USER: 'UPDATE_USER',
  FETCH_STUDENT: 'FETCH_STUDENT',
  UPDATE_STUDENT: 'UPDATE_STUDENT',
  FETCH_FRIENDS: 'FETCH_FRIENDS',
  FETCH_FRIEND: 'FETCH_FRIEND',
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
  FETCH_WAITLISTS: 'FETCH_WAITLISTS',
  FETCH_WAITLIST: 'FETCH_WAITLIST',
  // FETCH_DEPARTMENT: 'FETCH_DEPARTMENT',
  // FETCH_DEPARTMENTS: 'FETCH_DEPARTMENTS',
  FETCH_DEPT_COURSES: 'FETCH_DEPT_COURSES',
  FETCH_COURSE_REVIEWS: 'FETCH_COURSE_REVIEWS',
  CREATE_REVIEW: 'CREATE_REVIEW',
  JOIN_WAITLISTS: 'JOIN_WAITLISTS',
  ADD_TO_ONE_WAITLIST: 'ADD_TO_ONE_WAITLIST',
  REMOVE_FROM_WAITLIST: 'REMOVE_FROM_WAITLIST',
  WITHDRAW_FROM_WAITLIST: 'WITHDRAW_FROM_WAITLIST',
  MARK_COURSE: 'MARK_COURSE',
  FETCH_HOME: 'FETCH_HOME',
  MARK_AS_TAKEN: 'MARK_AS_TAKEN',
  FETCH_PROFESSOR_HOME: 'FETCH_PROFESSOR_HOME',
  PRIORITIZE: 'PRIORITZE',
  ...SearchActionTypes,
  ...HomeActionTypes,
};

export const fetchUser = (id) => (dispatch) => {
  axios.get(`${ROOT_URL}/users/${id}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_USER,
      payload: response,
    });
  });
};

export function updateUser(id, user) {
  return (dispatch) => {
    axios
      .put(`${ROOT_URL}/users/${id}`, user)
      .then((response) => {
        dispatch({
          type: ActionTypes.UPDATE_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const fetchStudent = (id) => (dispatch) => {
  axios.get(`${ROOT_URL}/students/${id}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_STUDENT,
      payload: response,
    });
  });
};

export const fetchFriend = (id) => (dispatch) => {
  console.log('fetching friend::', id);
  axios.get(`${ROOT_URL}/students/${id}`).then((res) => {
    const response = res.data;
    console.log('response::', response);
    dispatch({
      type: ActionTypes.FETCH_FRIEND,
      payload: response,
    });
  });
};

export function updateStudent(id, student) {
  return (dispatch) => {
    axios
      .put(`${ROOT_URL}/students/${id}`, student)
      .then((response) => {
        dispatch({
          type: ActionTypes.UPDATE_STUDENT,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const fetchFriends = (id) => (dispatch) => {
  axios.get(`${ROOT_URL}/students/friends/${id}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_FRIENDS,
      payload: response,
    });
  });
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

export const fetchDeptCourses = (dept) => (dispatch) => {
  axios.get(`${ROOT_URL}/courses/${dept}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_DEPT_COURSES,
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

export const fetchWaitlists = () => (dispatch) => {
  axios.get(`${ROOT_URL}/waitlist`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_WAITLISTS,
      payload: response,
    });
  });
};

export const fetchWaitlist = (dept, num) => (dispatch) => {
  axios.get(`${ROOT_URL}/waitlist/${dept}/${num}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_WAITLIST,
      payload: response,
    });
  });
};

export const joinWaitlists = (joinRequest) => (dispatch) => {
  axios.post(`${ROOT_URL}/waitlist/join`, joinRequest).then((res) => {
    const response = res.data;
    console.log('received request', res);
    dispatch({
      type: ActionTypes.JOIN_WAITLISTS,
      payload: response,
    });
  });
};

export const addToOneWaitlist = (addRequest) => (dispatch) => {
  axios.put(`${ROOT_URL}/waitlist/addone`, addRequest).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.ADD_TO_ONE_WAITLIST,
      payload: response,
    });
  });
};

export const removeFromWaitlist = (removalRequest) => (dispatch) => {
  axios.put(`${ROOT_URL}/waitlist/remove`, removalRequest).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.REMOVE_FROM_WAITLIST,
      payload: response,
    });
  });
};

export const withdrawFromWaitlist = (withdrawalRequest) => (dispatch) => {
  axios.post(`${ROOT_URL}/waitlist/withdraw`, withdrawalRequest).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.WITHDRAW_FROM_WAITLIST,
      payload: response,
    });
  });
};

// export const fetchDepartments = () => (dispatch) => {
//   axios.get(`${ROOT_URL}/departments`).then((res) => {
//     const response = res.data;
//     dispatch({
//       type: ActionTypes.FETCH_DEPARTMENTS,
//       payload: response,
//     });
//   });
// };

export const fetchCourseReviews = (dept, num) => (dispatch) => {
  axios.get(`${ROOT_URL}/coursereviews/${dept}/${num}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_REVIEWS,
      payload: response,
    });
  });
};

export const createCourseReview = (courseId, offering, review) => (dispatch) => {
  // eslint-disable-next-line no-underscore-dangle
  axios
    .post(`${ROOT_URL}/reviews/${courseId}/${offering}`, review)
    .then((res) => {
      const response = res.data;
      dispatch({
        type: ActionTypes.CREATE_REVIEW,
        payload: response,
      });
    });
};

export const markCourse = (studentId, courseId, mode, taken) => (dispatch) => {
  // eslint-disable-next-line no-underscore-dangle
  console.log('marking course');
  axios.put(`${ROOT_URL}/student/${studentId}/${courseId}/${mode}/${taken}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.MARK_COURSE,
      payload: response,
    });
  });
};

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

export const fetchProfessorHome = (name) => (dispatch) => {
  axios.get(`${ROOT_URL}/prof_home/${name}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_PROFESSOR_HOME,
      payload: response,
    });
  });
};

export const updatePriority = (dept, num, offeringIndex, studentId, priority) => (dispatch) => {
  axios.put(`${ROOT_URL}/prioritize/${dept}/${num}/${offeringIndex}/${studentId}/${priority}`).then((res) => {
    const response = res.data;
    console.log('update priority action', res.data);
    dispatch({
      type: ActionTypes.PRIORITIZE,
      payload: response,
    });
  });
};
