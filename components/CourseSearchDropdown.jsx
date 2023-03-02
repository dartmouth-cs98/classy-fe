/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { searchCourses } from '../actions';

function CourseSearchDropdown(props) {
  const {
    inputValue, // text input value in field
    setInputValue, // function to set text input value
    selectedCourse, // selected course value (stored  as an object)
    setSelectedCourse, // function to set selected course object
  } = props;

  const dispatch = useDispatch();
  const searchResults = useSelector((reduxState) => reduxState.home.searchResults);
  console.log(searchResults);

  return (
    <Autocomplete
      freeSolo
      options={searchResults}
      clearOnBlur={false}
      onInputChange={(event, NewInputValue) => {
        setInputValue(NewInputValue);
        dispatch(searchCourses(NewInputValue));
      }}
      onChange={(e, newCourseValue) => setSelectedCourse(newCourseValue)}
      inputValue={inputValue}
      value={selectedCourse}
      getOptionLabel={(option) => inputValue}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Search Course" variant="outlined" />
      )}
      renderOption={(renderProps, option) => (
        <li {...renderProps} key={option._id}>
          {option.courseDept}
          {' '}
          {option.courseNum}
          {' - '}
          {option.courseTitle}
        </li>
      )}
    />
  );
}

export default CourseSearchDropdown;
