/* eslint-disable react/prop-types */
import React from 'react';

import styles from '../../styles/CourseInfo.module.css';
import OfferedTile from './OfferedTile';

function loadOfferings(values) {
  return values.map((value) => (
    <OfferedTile
      key={`offering-${value.term}-${value.period}-${value.professors}`}
      term={value.term}
      professors={value.professors}
      period={value.period}
    />
  ));
}

function Offered(props) {
  const { offerings } = props;
  return (
    <div className={[styles.horizscroll]}>
      {offerings ? loadOfferings(offerings) : ''}
    </div>
  );
}

export default Offered;
