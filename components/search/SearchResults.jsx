/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import All from './All';
import Courses from './Courses';
import Professors from './Professors';
import Distribs from './Distribs';

function SearchResults(props) {
  const { tab, results } = props;

  if (tab === 'Courses') {
    return <Courses results={results} />;
  }
  if (tab === 'Professors') {
    return <Professors results={results} />;
  }
  if (tab === 'Distribs') {
    return <Distribs results={results} />;
  }
  // tab === "All"
  return <All results={results} />;
}

export default SearchResults;
