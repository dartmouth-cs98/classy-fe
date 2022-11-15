/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../styles/ExploreHome.module.css';
import OfferedTile from './OfferedTile';

function loadOfferings(values) {
  return values.map((value) => (
    <OfferedTile
      key={`${value.term}${value.professors}`}
      term={value.term}
      professors={value.professors}
      period={value.period}
    />
  ));
}

function Offered(props) {
  const { course } = props;
  return (
    <div className={[styles.horizscroll]}>
      {course.offerings ? loadOfferings(course.offerings) : ''}
    </div>
  );
}

export default Offered;
