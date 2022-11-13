import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../styles/components/SearchBar.module.css';

function SearchBar(props) {
  const {
    searchInput, setSearchInput, input, setSearchResults,
  } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setSearchResults(true);
  };

  return (
    <div className={styles.bar}>
      <input
        ref={input}
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
        className={styles.input}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
}

export default SearchBar;
