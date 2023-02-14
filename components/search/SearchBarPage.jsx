/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { IconButton } from '@mui/material';
import CourseData from '../../data/data';
import TabBar from './TabBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Modal from '../Modal';
import { H2, H3 } from '../ui/typography';

function SearchBarPage(props) {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [tab, setTab] = useState('Courses');
  // const [searchResults, setSearchResults] = useState(null);
  const { children } = props;

  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <Modal
        isOpen={searchModalIsOpen}
        setIsOpen={setSearchModalIsOpen}
      // onButtonClick={onImageSubmit}
        buttonText="Apply"
        header="Course Search Filters"
      >
        <div style={{
          alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%',
        }}
        >
          <div style={{ height: '150px' }}>
            <H3 style={{ margin: '10px 0' }}>Distributive Requirements</H3>
            <select defaultValue="">
              <option selected value="">Select to Filter</option>
              {
          // years.map((year, index) => <option key={year} value={year}>{year}</option>)
        }
            </select>

          </div>

          <div style={{ height: '150px' }}>
            <H3 style={{ margin: '10px 0' }}>World Culture Requirements</H3>
            <select defaultValue="">
              <option selected value="">Select to Filter</option>
              {
          // years.map((year, index) => <option key={year} value={year}>{year}</option>)
        }
            </select>

          </div>

        </div>

      </Modal>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        // setSearchResults={setSearchResults}
      />
      {
        tab === 'Courses' && searchInput
          ? (
            <IconButton style={{ backgroundColor: 'transparent' }} onClick={() => setSearchModalIsOpen(true)}>
              <FilterAltOutlinedIcon />
            </IconButton>

          )
          : (
            null
          )
      }

      {
        searchInput // if search input exists, show search history page
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
