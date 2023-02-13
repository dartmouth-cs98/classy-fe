/* eslint-disable react/prop-types */
import React from 'react';
import getColor from '../../data/colorscheme';
import stylesCI from '../../styles/CourseInfo.module.css';
import {
  TextLabel, B1,
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
    title, val,
  } = props;
  return (
    <div className={stylesCI.tile} style={{ background: getColor(title, val) }}>
      <TextLabel>{title}</TextLabel>
      <B1>
        {val}
        {extraText(val === 'Not Enough Data' ? 'Unknown' : title)}
      </B1>
    </div>
  );
}

export default CourseInfoTile;
