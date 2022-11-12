/* eslint-disable react/prop-types */
import React from 'react';
import stylesCI from '../styles/CourseInfo.module.css';
import OfferedTile from './OfferedTile';

function loadOfferings(values) {
  return values.map((value) => (
    <OfferedTile
      key={value.term}
      term={value.term}
      professors={value.professors}
      period={value.period}
    />
  ));
}

function Offered(props) {
  const { course } = props;
  return (
    <div className={[stylesCI.glance]}>
      {loadOfferings(course.termsOffered)}
    </div>
  );
}

export default Offered;
