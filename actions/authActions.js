import axios from 'axios';
import { ROOT_URL } from './root_url';

export const AuthActionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
};

export const login = (username, password) => (dispatch) => {
  axios
    .get(`${ROOT_URL}/login`, { username, password })
    .then((res) => {
      const response = res.data;
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: { response },
      });
    });
};

export const register = (userObject) => (dispatch) => {
  axios.put(`${ROOT_URL}/register`, userObject).then((res) => {
    const response = res.data;
    dispatch({
      type: AuthActionTypes.REGISTER,
      payload: { response },
    });
  });
};
