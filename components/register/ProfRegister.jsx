/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import { H2 } from '../ui/typography';
import styles from '../../styles/ProfRegister.module.css';
import { loadRegister, register } from '../../actions/authActions';

// validate user information
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // 9-25 character password
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Register() {
  const [username, setUsername] = useState('');
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState('');
  const [astNameFocus, setLastNameFocus] = useState(false);

  const [password, setPass] = useState('');
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [department, setDepartment] = useState([]);

  const dispatch = useDispatch();

  // validate input
  useEffect(() => {
    setValidPass(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setFirstName(firstName);
    setLastName(lastName);
  }, [firstName, lastName]);

  useEffect(() => {
    const res = EMAIL_REGEX.test(email);
    setValidEmail(res);
  }, [email]);

  useEffect(() => {
    dispatch(loadRegister());
  }, []);
  const depts = useSelector(
    (reduxState) => reduxState?.auth?.current?.response?.depts,
  );
  const errors = useSelector(
    (reduxState) => reduxState.auth.errors,
  );

  const loadErrorAlert = () => {
    const list = [];
    if (!username) list.push('Please enter a username');
    if (!validEmail || !email) list.push('Please enter a valid email');
    if (!firstName || !lastName) list.push('Please enter your name');
    if (!validPass) {
      list.push(
        'Please enter a strong password consisting of at least: 8 total characters, an uppercase letter, a digit, and a special character',
      );
    }
    if (!validMatch) list.push('Please enter matching passwords');

    if (list.length) {
      return (
        <Alert severity="error" style={{ width: '100%' }}>
          {list.map((item) => <li key={item}>{item}</li>)}
        </Alert>
      );
    }
    return '';
  };

  const loadSuccessAlert = () => (
    <Alert severity="success" style={{ width: '100%' }}>{'You\'re ready to sign up!'}</Alert>
  );

  const loadInput = (type, id, onChange, onFocus, value) => (
    <div className={styles.formfield}>
      <label key={`label-${id}`} htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
      <input
        type={type}
        key={id}
        id={id}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
        value={value}
        required
      />
    </div>
  );

  const loadDepts = (type, onChange) => (
    <div className={styles.formfield}>
      <label key={`label-${type}`} htmlFor={type}>Primary Department</label>
      <select key={type} id={type} name={type} onChange={(e) => { onChange([e.target.value]); }}>
        <option key={`${type}-empty`} value="">-</option>
        {depts?.map((dept) => <option key={`${type}-${dept.name}`} value={dept._id}>{dept.name}</option>)}
      </select>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username, email, firstName, lastName, department, password,
    };
    // console.log('user: ', user);
    // const professor = { department };
    // dispatch(register({ user, student }));
  };

  return (
    <div className={styles.loginform}>
      <H2 className={styles.title}>Sign up today</H2>
      <div>
        {loadErrorAlert() ? loadErrorAlert() : loadSuccessAlert()}
        <br />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.rowcontainer}>
          {loadInput('text', 'username', setUsername, setUserFocus, username)}
          {loadInput('text', 'email', setEmail, setEmailFocus, email)}
        </div>
        <div className={styles.rowcontainer}>
          {loadInput('text', 'first name', setFirstName, setFirstNameFocus, firstName)}
          {loadInput('text', 'last name', setLastName, setLastNameFocus, lastName)}
        </div>
        <div className={styles.rowcontainer}>
          {loadInput('password', 'password', setPass, setPassFocus, password)}
          {loadInput('password', 'confirm password', setMatchPassword, setMatchFocus, matchPassword)}
        </div>
        <div className={styles.rowcontainer}>
          {/* TODO */}
          {loadDepts('major', setDepartment)}
        </div>
        <div className={styles.formbuttons}>
          <button
            type="submit"
            className={styles.btn}
            disabled={loadErrorAlert()}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className={styles.bottominfo}>
        <p>
          Already have an account?
          <br />
          <span className="line">
            <a href="/login">Sign in instead</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
