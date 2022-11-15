import React from 'react';
<<<<<<< HEAD:components/courses/Medians.jsx
import styles from '../../styles/ExploreHome.module.css';
=======
import styles from '../styles/ExploreHome.module.css';
>>>>>>> 41bb550 (connect fe to be):components/Medians.jsx
import MedianTile from './MedianTile';

export function convertMedian(avgMedian) {
  const roundedAvg = Math.round(avgMedian * 2) / 2.0;
  const grades = ['A', 'A/A-', 'A-', 'A-/B+', 'B+', 'B+/B', 'B', 'B/B-', 'B-'];
  const diff = 12 - roundedAvg + 0.25;
  return grades[Math.floor(diff * 2)];
}

function loadMedians(values) {
  return Object.entries(values).map((key) => (
    <MedianTile
      key={key[0]}
      term={key[0]}
      median={convertMedian(key[1])}
    />
  ));
}

function Medians(props) {
  const { medians } = props;
  return (
    <div className={[styles.horizscroll]}>
      {medians ? loadMedians(medians) : ''}
    </div>
  );
}

export default Medians;
