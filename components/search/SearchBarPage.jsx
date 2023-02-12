/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseData from '../../data/data';
import TabBar from './TabBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function SearchBarPage(props) {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [tab, setTab] = useState('Courses');
  // const [searchResults, setSearchResults] = useState(null);
  const { children } = props;

  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        // setSearchResults={setSearchResults}
      />
      {
        searchInput // if search input exists, show tab bar page
          ? (
            <div>
              <TabBar tab={tab} setTab={setTab} />
              <SearchResults tab={tab} />
            </div>
          )
          : ( // else show default body
            children
          )

      }

    </div>
  );
}

export default SearchBarPage;
