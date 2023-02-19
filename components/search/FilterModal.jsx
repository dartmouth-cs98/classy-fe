/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Checkbox } from '@mui/material';
import Modal from '../Modal';
import {
  H2, H3, H4, B1,
} from '../ui/typography';
import { distribs as allDistribs, wcs as allWcs } from '../../constants/colors';
import {
  addDistribFilter, removeDistribFilter, addWcFilter, removeWcFilter,
} from '../../actions';
import FilterSelector from './FilterSelector';

function FilterModal(props) {
  const { setIsOpen, isOpen } = props;
  const dispatch = useDispatch();
  const stateDistribFilters = useSelector((reduxState) => reduxState.search.distribFilters);
  const stateWcFilters = useSelector((reduxState) => reduxState.search.wcFilters);

  const handleDistribChange = (e) => {
    const distrib = allDistribs.find((distribObj) => distribObj.name === e.target.value);
    if (distrib) {
      dispatch(addDistribFilter(distrib));
    }
  };

  const handleDistribClick = (distrib) => {
    // console.log(distrib);
    dispatch(removeDistribFilter(distrib));
  };

  const handleWcChange = (e) => {
    const distrib = allWcs.find((distribObj) => distribObj.name === e.target.value);
    if (distrib) {
      dispatch(addWcFilter(distrib));
    }
  };

  const handleWcClick = (distrib) => {
    // console.log(distrib);
    dispatch(removeWcFilter(distrib));
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      // onButtonClick={inputRef.current.focus}
      buttonText="Apply"
      header="Course Search Filters"
    >
      <div style={{
        alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', marginTop: '35px', gap: '10px',
      }}
      >
        <div style={{ height: '130px' }}>
          <H3>Distributive Requirements</H3>
          <FilterSelector
            handleChange={handleDistribChange}
            handleClick={handleDistribClick}
            allFilters={allDistribs}
            stateFilters={stateDistribFilters}
          />
        </div>

        <div style={{ height: '130px' }}>
          <H3>World Culture Requirements</H3>
          <FilterSelector
            handleChange={handleWcChange}
            handleClick={handleWcClick}
            allFilters={allWcs}
            stateFilters={stateWcFilters}
          />
        </div>

        <div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox style={{ marginLeft: '-10px' }} />
            <H4>Offered Next Term</H4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox style={{ marginLeft: '-10px' }} />
            <H4>NR Eligible</H4>
          </div>
        </div>

      </div>

    </Modal>

  );
}

export default FilterModal;
