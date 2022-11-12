/* eslint-disable react/prop-types */
import React from 'react';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  TextLabel,
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
    <div className={stylesCI.medianTile} style={{ background: getColor('median', median) }}>
      <div className={stylesCI.tileText}><TextLabel>{median}</TextLabel></div>
      <div className={stylesCI.tileText}>
        <TextLabel>
          {termString}
          {' '}
          {year}
        </TextLabel>
      </div>
    </div>
  );
}

export default MedianTile;
