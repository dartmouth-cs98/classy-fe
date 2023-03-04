/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDropDownCourses, clearDropdown } from '../actions';

function CourseSearchDropdown(props) {
  const {
    inputValue, // text input value in field
    setInputValue, // function to set text input value
    selectedCourse, // selected course value (stored  as an object)
    setSelectedCourse, // function to set selected course object
  } = props;

  const dispatch = useDispatch();
  const searchResults = useSelector((reduxState) => reduxState.home.searchResults);
  // console.log(searchResults);

  useEffect(() => {
    dispatch(clearDropdown());
  }, []);

  return (
    <Autocomplete
      freeSolo
      options={searchResults}
      clearOnBlur={false}
      onInputChange={(event, NewInputValue) => {
        setInputValue(NewInputValue);
        console.log(NewInputValue);
        dispatch(fetchDropDownCourses(NewInputValue));
      }}
      onChange={(e, newCourseValue) => {
        setSelectedCourse(newCourseValue);
        if (newCourseValue) {
          setInputValue(`${newCourseValue.courseDept} ${newCourseValue.courseNum} - ${newCourseValue.courseTitle}`);
        }
      }}
      inputValue={inputValue}
      value={selectedCourse}
      getOptionLabel={() => inputValue}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      style={{ width: 500 }}
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
