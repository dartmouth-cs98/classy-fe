/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-unused-vars */
import React, {
  useCallback, useState, useEffect, useRef,
} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/components/SearchBar.module.css';
import { setSearchQuery } from '../../actions';

function SearchBar(props) {
  const {
    searchInput, setSearchInput, setSearchResults, focusSearchBar,
  } = props;
  const dispatch = useDispatch();
  const searchQuery = useSelector((reduxState) => reduxState.search.searchQuery);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    // e.preventDefault();
    // setSearchInput(e.target.value);
    // setSearchResults(true);
    console.log(e.target.value);

    dispatch(setSearchQuery(e.target.value));
    // dispatch(fetchSearch(e.target.value));
  };

  // focus on input when search bar loaded
  const input = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  // useEffect(() => {
  //   // inputRef.current.focus();
  // });

  // useEffect(() => {
  //   // console.log('hi');
  //   // console.log(focusSearchBar);
  //   if (focusSearchBar) {
  //     // console.log('focusing');
  //     // setTimeout(() => {
  //     //   console.log('Executed after 1 second');
  //     // }, 1000);
  //     inputRef.current.focus();
  //   }
  // }, [focusSearchBar]);

  return (
    <div className={styles.bar}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchQuery}
        className={styles.input}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
}

export default SearchBar;
