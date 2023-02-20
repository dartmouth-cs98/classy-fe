/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { IconButton, Checkbox } from '@mui/material';
import CourseData from '../../data/data';
import TabBar from './TabBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Modal from '../Modal';
import {
  H2, H3, H4, B1,
} from '../ui/typography';
import { distribs, wcs } from '../../constants/colors';
import { addDistribFilter, removeDistribFilter } from '../../actions';
import FilterModal from './FilterModal';

function SearchBarPage(props) {
  // const [searchInput, setSearchInput] = useState('');
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [tab, setTab] = useState('Courses');
  // const inputRef = useRef(null);
  const { children } = props;
  const searchQuery = useSelector((reduxState) => reduxState.search.searchQuery);
  const searchResults = useSelector((reduxState) => reduxState.search.searchResults);

  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <FilterModal setIsOpen={setSearchModalIsOpen} isOpen={searchModalIsOpen} />
      <SearchBar />
      {
        tab === 'Courses'
          ? (
            <FilterAltOutlinedIcon style={{ cursor: 'pointer', marginLeft: '5px' }} onClick={() => setSearchModalIsOpen(true)} />
          )
          : (
            null
          )
      }

      {// if search input or search results exist, show results page
        searchQuery || searchResults.length !== 0
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
