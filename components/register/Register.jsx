import React, { useRef, useState, useEffect } from 'react';
import { H3, H2, B1 } from '../ui/typography';
import styles from '../../styles/Register.module.css';

// validate user information
const UNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; // /^[A-Za-z0-9._%+-]+@dartmouth\.edu$
const NAME_REGEX = /^[A-z][A-z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // 9-25 character password
const ID_REGEX = /^[A-z][A-z0-9-_]{6}$/; // 7 digit student id
// const REGISTER_URL = '/register';

function Register() {
  const usernameRef = useRef(); // set focus on username when page loads
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [schoolID, setSchoolID] = useState('');
  const [validSchoolID, setValidSchoolID] = useState(false);
  const [schoolIDFocus, setSchoolIDFocus] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [astNameFocus, setLastNameFocus] = useState(false);

  const [password, setPass] = useState('');
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // set focus to username field when component loads
  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);

  // validate input
  useEffect(() => {
    const res = UNAME_REGEX.test(username);
    // debug
    console.log(res);
    console.log(username);
    setValidName(res);
  }, [username]);

  useEffect(() => {
    const res = ID_REGEX.test(schoolID);
    // debug
    console.log(res);
    console.log(schoolID);
    setValidSchoolID(res);
  }, [schoolID]);

  useEffect(() => {
    const res = NAME_REGEX.test(firstName);
    // debug
    console.log(res);
    console.log(firstName);
    setValidName(res);
  }, [firstName]);

  useEffect(() => {
    const res = NAME_REGEX.test(lastName);
    // debug
    console.log(res);
    console.log(lastName);
    setValidName(res);
  }, [lastName]);

  // PASSWORD
  useEffect(() => {
    setValidPass(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  // clear out error message if any of the three states change
  useEffect(() => {
    setErrMsg('');
  }, [username, password, matchPassword]);

  return (
    <div className={styles.loginform}>
      <H2 className={styles.title}>
        Sign up today
      </H2>
      <form>
        <div className={styles.rowcontainer}>
          <div className={styles.formfield}>
            <label htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              ref={usernameRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          </div>
          <div className={styles.formfield}>
            <label htmlFor="schoolID">
              School ID
            </label>
            <input
              type="text"
              id="schoolID"
            />
          </div>
          <div className={styles.formfield}>
            <label htmlFor="classYear">
              Year
            </label>
            <select id="classYear" name="classYear">
              <option value="23">'23</option>
              <option value="24">'24</option>
              <option value="25">'25</option>
              <option value="26">'26</option>
            </select>
          </div>
        </div>
        <div className={styles.rowcontainer}>
          <div className={styles.formfield}>
            <label htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
            />
          </div>
          <div className={styles.formfield}>
            <label htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
            />
          </div>
        </div>
        <div className={styles.rowcontainer}>
          <div className={styles.formfield}>
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              value={password}
              required
              onFocus={() => setPassFocus(true)}
              onBlur={() => setPassFocus(false)}
            />
          </div>
          <div className={styles.formfield}>
            <label htmlFor="confirm_password">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm_password"
              onChange={(e) => setPass(e.target.value)}
              value={matchPassword}
              required
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </div>
        </div>
        <div className={styles.rowcontainer}>
          <div className={styles.formfield}>
            <label htmlFor="majors">
              Major(s)+
            </label>
            <select id="majors" name="majors">
              <option value="Computer Science">Computer Science</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Econ">Econ</option>
              <option value="Studio Art">Studio Art</option>
              <option value="Math">Math</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <div className={styles.formfield}>
            <label htmlFor="minors">
              Minors(s)+
            </label>
            <select id="minors" name="minors">
              <option value="Computer Science">Computer Science</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Econ">Econ</option>
              <option value="Studio Art">Studio Art</option>
              <option value="Math">Math</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
        </div>
        <div className={styles.formbuttons}>
          <button type="button" className={styles.btn} disabled={!!(!validName || !validPass || !validMatch)}>
            Sign Up
          </button>
        </div>
      </form>
      <div className={styles.bottominfo}>
        <p>
          Already have an account?
          {' '}
          <br />
          <span className="line">
            {/* put router link here, placeholder link below */}
            <a href="/Login">Sign in instead</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
