/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import { H1, H2 } from '../ui/typography';
import styles from '../../styles/Login.module.css';
import { login } from '../../actions/authActions';

function Login() {
  // set focus on first input when Login loads or there is an error
  const userRef = useRef();

  // get user input and setup error/success
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false); // replace with a react router to home page

  // set the focus on the first input when Login loads
  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  // empty out any error message if the user changes any fields
  useEffect(() => {
    setErrorMsg('');
  }, [username, password]);

  const dispatch = useDispatch();

  // when submit button on the form has been pressed
  const handleSubmit = async (e) => {
    e.preventDefault();
    // debug
    console.log(username, password);
    dispatch(login({ username, password }));
    // for testing, set success to true
    // setSuccess(true);
  };

  const loadErrorAlert = () => {
    const list = [];
    if (!username) list.push('Please enter your username');
    if (!password) list.push('Please enter your password');

    if (list.length) {
      return (
        <Alert severity="error" style={{ width: '100%' }}>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Alert>
      );
    }
    return '';
  };

  const loadInput = (type, id, onChange, value) => (
    <div className={styles.formsection}>
      <label htmlFor={id} className="labeltitle">
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      <input
        type={type}
        id={id}
        autoComplete="on"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        required
      />
    </div>
  );

  if (success) {
    return (
      <div>
        <h1>You are now logged in</h1>
        <br />
        <p>
          <Link href="/">Go to Homepage</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.loginform}>
      <div className={styles.headercontainer}>
        <H2>Welcome back!</H2>
        <H1>Sign In</H1>
      </div>
      {loadErrorAlert()}
      <br />
      <form onSubmit={handleSubmit}>
        {loadInput('text', 'username', setUsername, username)}
        {loadInput('password', 'password', setPassword, password)}
        <div className={styles.formbuttons}>
          <button
            type="submit"
            className={styles.btn}
            disabled={!username || !password}
          >
            Sign In
          </button>
        </div>
      </form>
      <p>
        Need an account?
        <br />
        <span className="line">
          <a href="/register">Sign up instead</a>
        </span>
      </p>
    </div>
  );
}

export default Login;
