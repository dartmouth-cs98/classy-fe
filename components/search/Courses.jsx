/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import CourseTable from '../CourseTable';

function Courses(props) {
  const searchResults = useSelector((reduxState) => reduxState.search.searchResults);
  console.log(searchResults);

  return (
    <CourseTable courses={searchResults} />

  );
}

export default Courses;
