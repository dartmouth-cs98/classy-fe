/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import getColor from '../../data/colorscheme';
import stylesCI from '../../styles/CourseInfo.module.css';
import {
  TextLabel,
} from '../ui/typography';
import RecommendCourseModal from './RecommendCourseModal';
import WaitlistModal from '../waitlist/WaitlistModal';
import { markAsTaken } from '../../actions';

function CourseInfoTitle(props) {
  const { course, student, onWaitlist } = props;
  const [taken, setTaken] = useState(student?.coursesTaken?.includes(course._id));
  const dispatch = useDispatch();

  const onTakenClick = () => {
    setTaken(!taken);
    dispatch(markAsTaken(student._id, course._id, taken));
  };

  return (
    <div className={stylesCI.ciTitle}>
      <WaitlistModal
        course={course}
        studentId={`ObjectId('${student._id}')`}
        onWaitlist={onWaitlist}
      />

      <button type="button" className={stylesCI.ciButton} style={{ background: getColor('cititle', taken) }} onClick={onTakenClick}>
        <TextLabel>{taken ? 'Mark as Not Taken' : 'Mark as Taken'}</TextLabel>
      </button>

      <RecommendCourseModal />
    </div>
  );
}

export default CourseInfoTitle;
