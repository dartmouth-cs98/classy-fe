/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import CourseInfoTile from './Tile';
import styles from '../styles/CourseInfo.module.css';

function Glance(props) {
  const { course } = props;
  return (
    <div className={[styles.glance]}>
      <CourseInfoTile title="Distrib" val={course.distribs.length > 0 ? course.distribs : 'N/A'} />
      <CourseInfoTile title="WC" val={course.wc ? course.wc : 'N/A'} />
      <CourseInfoTile title="NR Eligible" val={course.nr ? course.nr : 'N/A'} />
      <CourseInfoTile title="Avg Median" val={course.avgMedian ? course.avgMedian : 'N/A'} />
      <CourseInfoTile title="Waitlist" val={course.waitlist ? 'Required' : 'Not Required'} />
    </div>
  );
}

export default Glance;
