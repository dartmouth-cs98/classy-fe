/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {
  TextField, Select, MenuItem, FormControl, InputLabel, InputAdornment, Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import TabBar from './TabBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import FilterModal from './FilterModal';
import FiltersDisplay from './FiltersDisplay';
import { setSearchQuery } from '../../actions';

function SearchBarPage(props) {
  // const [searchInput, setSearchInput] = useState('');
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [tab, setTab] = useState('Courses');

  const { children } = props;
  const searchQuery = useSelector((reduxState) => reduxState.search.searchQuery);
  const searchReducer = useSelector((reduxState) => reduxState.search);
  const dispatch = useDispatch();

  const filtersApplied = searchReducer.distribFilters.length !== 0
    || searchReducer.wcFilters.length !== 0
    || searchReducer.offeredNext
    || searchReducer.nrEligible;

  const filterIconColor = (filtersApplied) ? 'var(--navy)' : 'var(--light-grey)';

  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FilterModal setIsOpen={setSearchModalIsOpen} isOpen={searchModalIsOpen} />
        <TextField
          autoFocus
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => {
            dispatch(setSearchQuery(e.target.value));
            // setSearchInput(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{ width: '325px' }}
        />
        {
          tab === 'Courses'
            ? (
              <FilterListIcon style={{ cursor: 'pointer', marginLeft: '5px', color: filterIconColor }} onClick={() => setSearchModalIsOpen(true)} />
            )

            : (
              null
            )
        }

      </div>

      {/* <TabBar tab={tab} setTab={setTab} /> */}
      {/* <SearchBar /> */}

      <div style={{
        display: 'flex', flexDirection: 'row', minHeight: '45px', justifyItems: 'flex-start',
      }}
      >
        <FiltersDisplay filtersApplied={filtersApplied} tab={tab} />

      </div>
      {/* {searchQuery || filtersApplied
        ? <TabBar tab={tab} setTab={setTab} />
        : null} */}

      {// if search input or any filters applied, show results page
        searchQuery || filtersApplied
          ? (
            <div>
              {/* <TabBar tab={tab} setTab={setTab} /> */}
              <TabBar tab={tab} setTab={setTab} style={{ marginTop: '50px' }} />
              <div>
                <SearchResults tab={tab} />
              </div>
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
