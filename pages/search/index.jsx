/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import CourseData from '../../data/data';
import TabBar from '../../components/search/TabBar';
import SearchBar from '../../components/search/SearchBar';
import DefaultBody from '../../components/search/DefaultBody';
import SearchResults from '../../components/search/SearchResults';

function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  const [tab, setTab] = useState('All');
  const [searchResults, setSearchResults] = useState(null);

  const input = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  const onBlur = (e) => {
    window.setTimeout(() => e.target.focus(), 0);
  };

  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        input={input}
        setSearchResults={setSearchResults}
        onBlur={onBlur}
      />
      {
        searchInput // if search input exists, show tab bar page
          ? (
            <div>
              <TabBar tab={tab} setTab={setTab} />
              <SearchResults tab={tab} results={searchResults} />
            </div>
          )
          : ( // else show default page
            <DefaultBody />
          )

      }

    </div>
  );
}

export default SearchPage;
