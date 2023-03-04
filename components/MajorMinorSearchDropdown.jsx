/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDropDownMajorMinor, clearMajorMinorDropdown } from '../actions';

function MajorMinorSearchDropdown(props) {
  const {
    inputValue, // text input value in field
    setInputValue, // function to set text input value
    selectedDept, // selected course value (stored  as an object)
    setSelectedDept, // function to set selected course object
  } = props;

  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const searchMajorMinorResults = useSelector((reduxState) => reduxState.home.searchMajorMinorResults);
  // console.log(searchResults);

  useEffect(() => {
    dispatch(clearMajorMinorDropdown());
  }, []);

  return (
    <Autocomplete
      freeSolo
      options={searchMajorMinorResults}
      clearOnBlur={false}
      onInputChange={(event, NewInputValue) => {
        setInputValue(NewInputValue);
        console.log(NewInputValue);
        dispatch(fetchDropDownMajorMinor(NewInputValue));
      }}
      onChange={(e, newDeptValue) => {
        setSelectedDept(newDeptValue);
        // if (newCourseValue) {
        //   setInputValue(`${newCourseValue.courseDept}
        // ${newCourseValue.courseNum} - ${newCourseValue.courseTitle}`);
        // }
      }}
      inputValue={inputValue}
      value={selectedDept}
      getOptionLabel={(option) => option.name || ''}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Search Departments" variant="outlined" />
      )}
      renderOption={(renderProps, option) => (
        <li {...renderProps} key={option._id}>
          {option.name}
        </li>
      )}
    />
  );
}

export default MajorMinorSearchDropdown;
