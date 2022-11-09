/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import getColor from '../pages/courseinfo/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';

function MedianTile(props) {
  const { termString, median } = props;
  const terms = {
    f: 'Fall',
    w: 'Winter',
    s: 'Spring',
    x: 'Summer',
  };
  const year = `20${termString.substring(0, 2)}`;
  const term = terms[termString[2]];
  return (
    <div className={stylesCI.medianTile} style={{ background: getColor('median', median) }}>
      <div className={stylesCI.tileText}>{median}</div>
      <div className={stylesCI.tileText}>
        {term}
        {' '}
        {year}
      </div>
    </div>
  );
}

export default MedianTile;
