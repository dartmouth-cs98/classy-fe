/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Modal from '../Modal';
import { searchCourses } from '../../actions';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
];

function ShoppingModal(props) {
  const {
    isOpen, setIsOpen,
  } = props;

  const [query, setQuery] = useState('');
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const searchResults = useSelector((reduxState) => reduxState.home.searchResults);

  const arr = ['hi', 'test', 'd'];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Shopping Cart"
    >
      <Autocomplete
        options={searchResults}
        onInputChange={(event, NewInputValue) => {
          setQuery(NewInputValue);
          dispatch(searchCourses(NewInputValue));
          console.log(NewInputValue);
        }}
        onChange={(e, newValue) => setValue(newValue)}
        inputValue={query}
        value={value}
        getOptionLabel={(option) => option.courseTitle || ''}
        isOptionEqualToValue={(courseOption, courseValue) => courseOption._id === courseValue._id}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />

      {/* <Autocomplete
        freeSolo
        options={searchResults}
        getOptionLabel={(option) => option._id}
        // onInputChange={(event, value, reason) => {
        //   setQuery(value);
        //   dispatch(searchCourses(value));
        // }}
        // value={query}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Course"
            InputProps={{
              ...params.InputProps,
            }}
            sx={{ width: '300px' }}
          />
        )}
      /> */}
      {/* <Autocomplete
        freeSolo
        options={searchResults}
        getOptionLabel={(option) => option._id}
        // renderOption={(option) => <>{option.courseDept}</>}
        onChange={(event, value, reason) => {
          console.log(value);
          setQuery(value);
          dispatch(searchCourses(value));
        }}
        value={query}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Course"
            InputProps={{
              ...params.InputProps,
            }}
            sx={{ width: '300px' }}
          />
        )} */}
      {/* /> */}
      {/* <Autocomplete
        freeSolo
        options={searchResults.map((course, index) => `${course.courseDept
           + course.courseNum} - ${course.courseTitle}`)}
        onInputChange={(event, value, reason) => {
          setQuery(value);
          dispatch(searchCourses(value));
        }}
        value={query}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Course"
            InputProps={{
              ...params.InputProps,
            }}
            sx={{ width: '300px' }}
          />
        )}
      /> */}

    </Modal>
  );
}

export default ShoppingModal;
