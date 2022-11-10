/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  TextLabel,
} from './ui/typography';

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
  const { title, val } = props;
  return (
    <div className={stylesCI.tile} style={{ background: getColor(title, val) }}>
      <TextLabel>{title}</TextLabel>
      <TextLabel>
        {val}
        {extraText(title)}
      </TextLabel>
    </div>
  );
}

export default CourseInfoTile;
