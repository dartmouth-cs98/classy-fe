/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import getColor from '../../data/colorscheme';
import stylesCI from '../../styles/CourseInfo.module.css';
import {
  TextLabel, A, B1,
} from '../ui/typography';

function extraText(type) {
  if (type === 'Workload') {
    return ' hrs/week';
  }
  if (type === 'Difficulty') {
    return '/5';
  }
  if (type === 'Quality') {
    return '/5';
  }
  return '';
}

function CourseInfoTile(props) {
  const {
    title, val, dept, num,
  } = props;
  const waitlistLink = <Link href={`/waitlist/${dept}/${num}`}><A>{val}</A></Link>;
  return (
    <div className={stylesCI.tile} style={{ background: getColor(title, val) }}>
      <TextLabel>{title}</TextLabel>
      <B1>
        {title.toLowerCase() === 'waitlist' && val === 'Sign Up Here' ? waitlistLink : val}
        {extraText(title)}
      </B1>
    </div>
  );
}

export default CourseInfoTile;
