/* eslint-disable react/prop-types */
import React from 'react';
import CourseInfoTile from './Tile';
import styles from '../../styles/CourseInfo.module.css';

function Glance(props) {
  const {
    distribs, wc, avgMedian, waitlist, dept, num, nr,
  } = props;
  return (
    <div className={[styles.glance]}>
<<<<<<< HEAD:components/courses/Glance.jsx
      <CourseInfoTile title="Distrib" val={distribs && distribs.length > 0 ? distribs.join('/') : 'N/A'} />
=======
      <CourseInfoTile title="Distrib" val={distribs && distribs.length > 0 ? distribs : 'N/A'} />
>>>>>>> 41bb550 (connect fe to be):components/Glance.jsx
      <CourseInfoTile title="WC" val={wc || 'N/A'} />
      <CourseInfoTile title="NR Eligible" val={nr ? 'Yes' : 'N/A'} />
      <CourseInfoTile title="Avg Median" val={avgMedian || 'N/A'} />
      <CourseInfoTile title="Waitlist" val={waitlist ? 'Sign Up Here' : 'Not Required'} dept={dept} num={num} />
    </div>
  );
}

export default Glance;
