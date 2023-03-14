/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { useRouter } from 'next/router';
import { H1, H2 } from '../ui/typography';
import styles from '../../styles/Login.module.css';
import { login } from '../../actions/authActions';

function Login() {
  // set focus on first input when Login loads or there is an error
  const userRef = useRef();
  const router = useRouter();

  // get user input and setup error/success
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success] = useState(false); // replace with a react router to home page
  const { user } = useSelector((state) => state.user);

  // set the focus on the first input when Login loads
  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  // empty out any error message if the user changes any fields
  useEffect(() => {
    setErrorMsg('');
  }, [username, password]);

  const initialRender = useRef(true);
  useEffect(() => {
    if (!initialRender.current) {
      if (user.status === 404 || Object.keys(user).length === 0) {
        if (user.status === 404) { setErrorMsg('Invalid username or password'); }
      } else if (user.student) {
        router.push('/home');
      } else if (user.professor) {
        router.push('/prof_home');
      }
    } else {
      initialRender.current = false;
    }
  }, [user]);

  const dispatch = useDispatch();

  // when submit button on the form has been pressed
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ username, password }));
  };

  const loadErrorAlert = () => {
    const list = [];
    if (!username) list.push('Please enter your username');
    if (!password) list.push('Please enter your password');
    if (errorMsg) list.push(errorMsg);

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
          Sign up instead
          {' '}
          <a href="/register">Student</a>
          {' '}
          <a href="/prof_register">or Professor</a>
        </span>
      </p>
    </div>
  );
}

export default Login;
