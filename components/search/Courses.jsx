/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { B1 } from '../ui/typography';
import styles from '../../styles/components/TabBar.module.css';
import CourseTable from '../CourseTable';

function Courses(props) {
  const searchResults = useSelector((reduxState) => reduxState.search.searchResults);
  console.log(searchResults);

  return (
    <CourseTable courses={searchResults} />

  );
}

export default Courses;
