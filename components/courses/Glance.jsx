/* eslint-disable react/prop-types */
import React from 'react';
import CourseInfoTile from './Tile';
import styles from '../../styles/CourseInfo.module.css';

function Glance(props) {
  const {
    distribs, wc, avgMedian, waitlist, dept, num, nr,
  } = props;
  return (
    <div key="glancediv" className={[styles.glance]}>
      <CourseInfoTile key="distribtile" title="Distrib" val={distribs && distribs.length > 0 ? distribs.join('/') : 'N/A'} />
      <CourseInfoTile key="wctile" title="WC" val={wc || 'N/A'} />
      <CourseInfoTile key="nrtile" title="NR Eligible" val={nr ? 'Yes' : 'N/A'} />
      <CourseInfoTile key="avgmediantile" title="Avg Median" val={avgMedian || 'N/A'} />
      <CourseInfoTile key="waitlisttile" title="Waitlist" val={waitlist ? 'Sign Up Here' : 'Not Required'} dept={dept} num={num} />
    </div>
  );
}

export default Glance;
