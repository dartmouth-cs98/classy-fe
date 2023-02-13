/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import styles from '../../styles/components/SearchBar.module.css';
import { fetchSearch } from '../../actions';

function SearchBar(props) {
  const {
    searchInput, setSearchInput, setSearchResults,
  } = props;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    // setSearchResults(true);
    dispatch(fetchSearch(e.target.value));
  };

  const onBlur = (e) => {
    window.setTimeout(() => e.target.focus(), 0);
  };

  // focus on input when search bar loaded
  const input = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div className={styles.bar}>
      <input
        ref={input}
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
        className={styles.input}
        onBlur={onBlur}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
}

export default SearchBar;
