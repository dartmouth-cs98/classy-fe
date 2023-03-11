/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import stylesCI from '../../styles/CourseInfo.module.css';

// import Offered from './Offered';
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

  const currTerm = '23S';
  const prevYear = 22;

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

  const containValidWaitlist = () => {
    const prevWaitlists = [];
    const futureWaitlists = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < course.offerings.length; i++) {
      // track prior waitlist term offerings
      if ((parseInt(course.offerings[i].term.substring(0, 2), 10) <= prevYear
        || course.offerings[i].term === currTerm)) {
        prevWaitlists.push(course.offerings);
      } else {
        futureWaitlists.push(course.offerings);
      }
    }
    return (futureWaitlists.length === 0);
  };

  // waitlist button for course info page, don't display if taken or no offering
  const loadWaitlistButton = () => {
    if (taken || containValidWaitlist()) {
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
