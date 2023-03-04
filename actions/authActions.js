import axios from 'axios';
import { ROOT_URL } from './root_url';

export const AuthActionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  LOAD_REGISTER: 'LOAD_REGISTER',
};

export const login = (userObject) => (dispatch) => {
  axios.post(`${ROOT_URL}/login`, userObject).then((res) => {
    const response = res.data;
    dispatch({
      type: AuthActionTypes.LOGIN,
      payload: { response },
    });
  });
};

export const loadRegister = () => (dispatch) => {
  axios.get(`${ROOT_URL}/register`).then((res) => {
    const response = res.data;
    dispatch({
      type: AuthActionTypes.LOAD_REGISTER,
      payload: { response },
    });
  });
};

export const register = (userObject) => (dispatch) => {
  axios.post(`${ROOT_URL}/register`, userObject).then((res) => {
    const response = res.data;
    dispatch({
      type: AuthActionTypes.REGISTER,
      payload: { response },
    });
  });
};
