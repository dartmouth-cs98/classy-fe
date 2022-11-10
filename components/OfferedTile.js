/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';

function OfferedTile(props) {
  const { term, instructors } = props;
  return (
    <div className={stylesCI.tile} style={{ background: getColor('term', term) }}>
      <div className={stylesCI.tileText}>{term}</div>
      <div className={stylesCI.tileText}>{instructors}</div>
    </div>
  );
}

export default OfferedTile;
