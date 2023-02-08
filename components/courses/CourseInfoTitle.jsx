import React, { useState } from 'react';
import getColor from '../../data/colorscheme';
import stylesCI from '../../styles/CourseInfo.module.css';
import {
  H2, TextLabel,
} from '../ui/typography';
import RecommendCourseModal from './RecommendCourseModal';
import WaitlistModal from '../waitlist/WaitlistModal';

function CourseInfoTitle(props) {
  const { course, studentId, onWaitlist } = props;
  const [taken, setTaken] = useState(false);

  const onTakenClick = () => {
    setTaken(!taken);
  };

  return (
    <div className={stylesCI.ciTitle}>
      <WaitlistModal
        course={course}
        studentId={`ObjectId('${studentId}')`}
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
