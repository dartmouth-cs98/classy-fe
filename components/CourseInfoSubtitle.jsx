import React from 'react';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  H3,
} from './ui/typography';

function CourseInfoSubtitle(props) {
  const { text } = props;

  return (
    <div className={stylesCI.topmargin}>
      <H3>{text}</H3>
    </div>
  );
}

export default CourseInfoSubtitle;
