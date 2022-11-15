import axios from 'axios';
import ROOT_URL from './rootURL';
import ActionTypes from './types';

// trying this out in async await format
export const fetchProfessors = () => (dispatch) => {
  axios.get(`${ROOT_URL}/professors`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_PROFESSORS,
      payload: response,
    });
  });
};

export const fetchProfessor = (name) => (dispatch) => {
  axios.get(`${ROOT_URL}/professors/${name}`).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.FETCH_PROFESSOR,
      payload: response,
    });
  });
};

export const updateProfessor = (name, professor) => (dispatch) => {
  axios.put(`${ROOT_URL}/professors/${name}`, professor).then((res) => {
    const response = res.data;
    dispatch({
      type: ActionTypes.UPDATE_PROFESSOR,
      payload: response.data,
    });
  });
};

export function createProfessor(professor, navigate) {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/professors/new`, professor)
      .then((response) => {
        dispatch({
          type: ActionTypes.CREATE_PROFESSOR,
          payload: response.data,
        });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteProfessor(id, navigate) {
  return (dispatch) => {
    axios
      .delete(`${ROOT_URL}/professors/${id}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.DELETE_PROFESSOR,
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
      .get(`${ROOT_URL}/search/professors/${query}`)
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
