/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import { H1, H2 } from '../ui/typography';
import styles from '../../styles/Login.module.css';

function Login() {
  // set focus on first input when Login loads or there is an error
  const userRef = useRef();
  const errRef = useRef();

  // get user input and setup error/success
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false); // replace with a react router to home page

  // set the focus on the first input when Login loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // empty out any error message if the user changes any fields
  useEffect(() => {
    setErrorMsg('');
  }, [user, password]);

  // when submit button on the form has been pressed
  const handleSubmit = async (e) => {
    e.preventDeffault();
    // debug
    console.log('submitted button pressed');
    console.log(user, password);
    // clear username and password
    setUser('');
    setPassword('');
    // for testing, set success to true
    setSuccess(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {success ? (
        <div>
          <h1>You are now logged in</h1>
          <br />
          <p>
            {/* placeholder link, replace with nav to homepage */}
            <a href="#">Go to Homepage</a>
          </p>
        </div>
      ) : (
        <div className={styles.loginform}>
          <p ref={errRef} className={errorMsg ? 'errormsg' : 'offscreen'}>{errorMsg}</p>
          <div className={styles.headercontainer}>
            <H2>Welcome back!</H2>
            <H1>Sign In</H1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formsection}>
              <label htmlFor="username" className="labeltitle">ID </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="on"
                onChange={(e) => setUser(e.target.value)}
                // allows for clearing inputs on form submission
                value={user}
                required
              />
            </div>
            <div className={styles.formsection}>
              <label htmlFor="password">Password </label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
                  // allows for clearing inputs on form submission
                value={password}
                required
              />
            </div>
            <div className={styles.formbuttons}>
              <button type="button" className={styles.btn}>Sign In</button>
            </div>
          </form>
          <p>
            Need an account?
            {' '}
            <br />
            <span className="line">
              {/* put router link here, placeholder link below */}
              <a href="#">Sign up instead</a>
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default Login;
