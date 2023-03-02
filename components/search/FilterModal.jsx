/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Checkbox, Button } from '@mui/material';
import Modal from '../Modal';
import {
  H2, H3, H4, B1,
} from '../ui/typography';
import { distribs as allDistribs, wcs as allWcs } from '../../constants/colors';
import {
  addDistribFilter, removeDistribFilter, addWcFilter, removeWcFilter, toggleNrEligible,
  toggleOfferedNext,
} from '../../actions';
import FilterSelector from './FilterSelector';

function FilterModal(props) {
  const { setIsOpen, isOpen } = props;
  const dispatch = useDispatch();
  const stateDistribFilters = useSelector((reduxState) => reduxState.search.distribFilters);
  const stateWcFilters = useSelector((reduxState) => reduxState.search.wcFilters);
  const offeredNext = useSelector((reduxState) => reduxState.search.offeredNext);
  const nrEligible = useSelector((reduxState) => reduxState.search.nrEligible);

  const handleDistribChange = (e) => {
    if (e.target.value === 'Select All') {
      allDistribs.map((distrib) => dispatch(addDistribFilter(distrib)));
      return null;
    }
    const distrib = allDistribs.find((distribObj) => distribObj.name === e.target.value);
    if (distrib) {
      dispatch(addDistribFilter(distrib));
    }
    return null;
  };

  const handleDistribClick = (distrib) => {
    // console.log(distrib);
    dispatch(removeDistribFilter(distrib));
  };

  const handleWcChange = (e) => {
    if (e.target.value === 'Select All') {
      allWcs.map((distrib) => dispatch(addWcFilter(distrib)));
      return null;
    }
    const distrib = allWcs.find((distribObj) => distribObj.name === e.target.value);
    if (distrib) {
      dispatch(addWcFilter(distrib));
    }
    return null;
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
      // buttonText="Apply"
      header="Course Search Filters"
      button={(
        <Button
          style={{
            width: '100px',
          }}
          size="large"
          variant="contained"
          onClick={() => setIsOpen(false)}
        >
          Done
        </Button>
)}
    >
      <div style={{
        alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', marginTop: '35px', gap: '10px',
      }}
      >
        <div style={{ height: '120px' }}>
          <H3>Distributive Requirements</H3>
          <FilterSelector
            handleChange={handleDistribChange}
            handleClick={handleDistribClick}
            allFilters={allDistribs}
            stateFilters={stateDistribFilters}
          />
        </div>

        <div style={{ height: '120px' }}>
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
            <Checkbox style={{ marginLeft: '-10px' }} checked={offeredNext} onChange={() => dispatch(toggleOfferedNext())} />
            <H4 style={{ cursor: 'pointer' }} onClick={() => dispatch(toggleOfferedNext())}>Offered Next Term</H4>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox style={{ marginLeft: '-10px' }} checked={nrEligible} onChange={() => dispatch(toggleNrEligible())} />
            <H4 style={{ cursor: 'pointer' }} onClick={() => dispatch(toggleNrEligible())}>NR Eligible</H4>
          </div>
        </div>

      </div>

    </Modal>

  );
}

export default FilterModal;
