/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TabBar from './TabBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import FilterModal from './FilterModal';

function SearchBarPage(props) {
  // const [searchInput, setSearchInput] = useState('');
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);
  const [tab, setTab] = useState('Courses');
  // const inputRef = useRef(null);
  const { children } = props;
  const searchQuery = useSelector((reduxState) => reduxState.search.searchQuery);
  const searchReducer = useSelector((reduxState) => reduxState.search);

  const [filtersApplied, setFiltersApplied] = useState(false);
  const [filterIconColor, setFilterIconColor] = useState('var(--navy)');

  useEffect(() => {
    const filtered = (searchReducer.distribFilters.length !== 0
    || searchReducer.wcFilters.length !== 0
    || searchReducer.offeredNext
    || searchReducer.nrEligible);
    setFiltersApplied(filtered);
    if (filtered) {
      setFilterIconColor('var(--navy)');
    } else {
      setFilterIconColor('var(--light-grey)');
    }
  }, [searchReducer]);

  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <FilterModal setIsOpen={setSearchModalIsOpen} isOpen={searchModalIsOpen} />
      <SearchBar />
      {
        tab === 'Courses'
          ? (
            <FilterAltOutlinedIcon style={{ cursor: 'pointer', marginLeft: '5px', color: filterIconColor }} onClick={() => setSearchModalIsOpen(true)} />
          )
          : (
            null
          )
      }

      {// if search input or any filters applied, show results page
        searchQuery || filtersApplied
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
