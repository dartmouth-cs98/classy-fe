/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Modal';
import { searchCourses } from '../../actions';
import CourseSearchDropdown from '../CourseSearchDropdown';

function ShoppingModal(props) {
  const {
    isOpen, setIsOpen,
  } = props;

  const [inputValue, setInputValue] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const dispatch = useDispatch();
  const searchResults = useSelector((reduxState) => reduxState.home.searchResults);

  const arr = ['hi', 'test', 'd'];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Shopping Cart"
    >
      <CourseSearchDropdown
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
      {/* <Autocomplete
        options={searchResults}
        clearOnBlur={false}
        onInputChange={(event, NewInputValue) => {
          setQuery(NewInputValue);
          dispatch(searchCourses(NewInputValue));
          console.log(NewInputValue);
        }}
        onChange={(e, newValue) => setCourseObj(newValue)}
        inputValue={query}
        value={courseObj}
        getOptionLabel={(option) => (`${option.courseDept +
          option.courseNum} - ${option.courseTitle}`) || ''}
        isOptionEqualToValue={(option, value) => option._id === value._id}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Search Course" variant="outlined" />
        )}
        renderOption={(renderProps, option) => (
          <li {...renderProps} key={option._id}>
            {option.courseDept + option.courseNum}
            {' - '}
            {option.courseTitle}
          </li>
        )}
      /> */}
    </Modal>
  );
}

export default ShoppingModal;
