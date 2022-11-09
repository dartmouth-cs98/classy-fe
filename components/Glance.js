/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import CourseInfoTile from './Tile';
import styles from '../styles/CourseInfo.module.css';

function Glance(props) {
  console.log('props are ', props);
  const {
    distribs, wc, avgMedian, waitlist,
  } = props;
  const nr = false;
  return (
    <div className={[styles.glance]}>
      <CourseInfoTile title="Distrib" val={distribs.length > 0 ? distribs : 'N/A'} />
      <CourseInfoTile title="WC" val={wc || 'N/A'} />
      <CourseInfoTile title="NR Eligible" val={nr || 'N/A'} />
      <CourseInfoTile title="Avg Median" val={avgMedian || 'N/A'} />
      <CourseInfoTile title="Waitlist" val={waitlist ? 'Required' : 'Not Required'} />
    </div>
  );
}

export default Glance;
