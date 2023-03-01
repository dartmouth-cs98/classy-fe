/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import stylesCI from '../../styles/CourseInfo.module.css';

import WaitlistModal from '../waitlist/WaitlistModal';
import { markCourse } from '../../actions';

function CourseInfoTitle(props) {
  const {
    course, student, onWaitlist,
  } = props;
  const [taken, setTaken] = useState(student?.coursesTaken?.includes(course._id));
  const determineStatus = () => {
    if (student?.coursesTaken?.includes(course._id)) {
      return 'taken';
    } if (student?.currentCourses?.includes(course._id)) {
      return 'taking';
    }
    return '';
  };

  const [status, setStatus] = useState(determineStatus);
  const dispatch = useDispatch();

  const changeStatus = (event) => {
    event.preventDefault();
    if (event.target.value === 'taken') {
      setStatus('taken');
    } else if (event.target.value === 'taking') {
      setStatus('taking');
    } else if (event.target.value === 'reset') {
      setStatus('reset');
    }
  };

  const onStatusClick = (event) => {
    event.preventDefault();
    console.log('submitting', status);
    if (status === 'taken') {
      dispatch(markCourse(student._id, course._id, 'taken', true));
      dispatch(markCourse(student._id, course._id, 'current', false));
    } else if (status === 'taking') {
      dispatch(markCourse(student._id, course._id, 'current', true));
      dispatch(markCourse(student._id, course._id, 'taken', false));
    } else if (status === 'reset') {
      dispatch(markCourse(student._id, course._id, 'current', false));
      dispatch(markCourse(student._id, course._id, 'taken', false));
    }
  };

  const loadWaitlistButton = () => {
    if (taken) {
      return '';
    }
    return <WaitlistModal course={course} studentId={student._id} onWaitlist={onWaitlist} />;
  };

  return (
    <div className={stylesCI.ciTitle}>
      {loadWaitlistButton()}
      <form onSubmit={onStatusClick}>
        <label htmlFor="statuses">Course Status:</label>
        <select name="statuses" id="statuses" onChange={changeStatus}>
          <option value="null">-</option>
          <option value="taken">Taken</option>
          <option value="taking">Currently Taking</option>
          <option value="reset">Reset</option>
        </select>
        <button type="submit" className={stylesCI.button} value="Submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default CourseInfoTitle;
