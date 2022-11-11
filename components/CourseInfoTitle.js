/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  H2, TextLabel,
} from './ui/typography';

function CourseInfoTitle(props) {
  const { course } = props;
  const [taken, setTaken] = useState(false);

  const onTakenClick = () => {
    setTaken(!taken);
  };

  return (
    <div className={stylesCI.ciTitle}>
      {course ? (
        <H2>
          {course.dept}
          {' '}
          {course.num}
          {' '}
          {course.courseTitle}
        </H2>
      ) : <H2 />}
      <button type="button" className={stylesCI.ciButton} style={{ background: getColor('cititle', taken) }} onClick={onTakenClick}>
        <TextLabel>{taken ? 'Mark as Not Taken' : 'Mark as Taken'}</TextLabel>
      </button>
    </div>
  );
}

export default CourseInfoTitle;
