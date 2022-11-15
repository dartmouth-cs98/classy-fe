import React, { useState } from 'react';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  H2, TextLabel,
} from './ui/typography';

function showCourseCodes(course) {
  const xlists = course.xlists && course.xlists.length > 0 ? `/${course.xlists.join('/')} ` : ' ';
  return (
    <H2>
      {course.courseDept}
      {' '}
      {course.courseNum}
      {course.xlists ? xlists : ' '}
      {course.courseTitle}
    </H2>
  );
}

function CourseInfoTitle(props) {
  const { course } = props;
  const [taken, setTaken] = useState(false);

  const onTakenClick = () => {
    setTaken(!taken);
  };

  return (
    <div className={stylesCI.ciTitle}>
      {course ? (
        showCourseCodes(course)
      ) : <H2 />}
      <button type="button" className={stylesCI.ciButton} style={{ background: getColor('cititle', taken) }} onClick={onTakenClick}>
        <TextLabel>{taken ? 'Mark as Not Taken' : 'Mark as Taken'}</TextLabel>
      </button>
    </div>
  );
}

export default CourseInfoTitle;
