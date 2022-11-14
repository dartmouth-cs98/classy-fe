/* eslint-disable react/prop-types */
import React from 'react';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  B1, TextLabel,
} from './ui/typography';

function MedianTile(props) {
  const { term, median } = props;
  const terms = {
    f: 'Fall',
    w: 'Winter',
    s: 'Spring',
    x: 'Summer',
  };
  const year = `20${term.substring(0, 2)}`;
  const termString = terms[term[2]];
  return (
    <div className={stylesCI.tile} style={{ background: getColor('median', median) }}>
      <TextLabel>{median}</TextLabel>
      <B1>
        {termString}
        {' '}
        {year}
      </B1>
    </div>
  );
}

export default MedianTile;
