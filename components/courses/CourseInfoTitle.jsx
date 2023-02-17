/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import getColor from '../../data/colorscheme';
import stylesCI from '../../styles/CourseInfo.module.css';
import {
  TextLabel,
} from '../ui/typography';
import WaitlistModal from '../waitlist/WaitlistModal';
import { markCourse } from '../../actions';

function CourseInfoTitle(props) {
  const {
    course, student, wroteReview, onWaitlist,
  } = props;
  const [taken, setTaken] = useState(student?.coursesTaken?.includes(course._id));
  const [current, setCurrent] = useState(student?.currentCourses?.includes(course._id));
  const dispatch = useDispatch();

  const onTakenClick = () => {
    setTaken(!taken);
    dispatch(markCourse(student._id, course._id, 'taken', taken));
    setCurrent(false);
    dispatch(markCourse(student._id, course._id, 'current', false));
  };

  const onCurrentClick = () => {
    setCurrent(!current);
    dispatch(markCourse(student._id, course._id, 'current', taken));
  };

  return (
    <div className={stylesCI.ciTitle}>
      {taken ? '' : (
        <WaitlistModal
          course={course}
          studentId={`ObjectId('${student._id}')`}
          onWaitlist={onWaitlist}
        />
      )}

      {wroteReview ? (''
      ) : (
        <button
          type="button"
          className={stylesCI.ciButton}
          style={{ background: getColor('cititle', taken) }}
          onClick={onTakenClick}
        >
          <TextLabel>{taken ? 'Mark as Not Taken' : 'Mark as Taken'}</TextLabel>
        </button>
      )}

      {taken ? (
			  ''
      ) : (
        <button
          type="button"
          className={stylesCI.ciButton}
          style={{ background: getColor('cititle', current) }}
          onClick={onCurrentClick}
        >
          <TextLabel>
            {current ? 'Mark as Not Taking Now' : 'Mark as Taking Now'}
          </TextLabel>
        </button>
      )}
    </div>
  );
}

export default CourseInfoTitle;
