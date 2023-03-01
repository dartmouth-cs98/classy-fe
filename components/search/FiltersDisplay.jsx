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
  H2, H3, H4, B1, TextLabel,
} from '../ui/typography';
import { distribs as allDistribs, wcs as allWcs } from '../../constants/colors';
import {
  addDistribFilter, removeDistribFilter, addWcFilter, removeWcFilter, toggleNrEligible,
  toggleOfferedNext,
} from '../../actions';
import FilterSelector from './FilterSelector';

function FiltersDisplay(props) {
  const stateDistribFilters = useSelector((reduxState) => reduxState.search.distribFilters);
  const stateWcFilters = useSelector((reduxState) => reduxState.search.wcFilters);
  const dispatch = useDispatch();
  const { filtersApplied, tab } = props;

  const handleDistribClick = (distrib) => {
    // console.log(distrib);
    dispatch(removeDistribFilter(distrib));
  };

  const handleWcClick = (distrib) => {
    // console.log(distrib);
    dispatch(removeWcFilter(distrib));
  };

  return (
    <div>
      {filtersApplied && tab === 'Courses'
        ? (
          <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', margin: '10px 0px', gap: '8px', justifyItems: 'flex-start',
          }}
          >
            <TextLabel style={{ marginRight: '10px' }} color="var(--mid-grey)">Filters</TextLabel>

            {stateDistribFilters.map((distrib, i) => (
              <div
                key={distrib.name}
                onClick={() => handleDistribClick(distrib)}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: distrib.pastel,
                  border: `2px solid ${distrib.dark}`,
                  borderRadius: '35px',
                  width: '65px',
                  height: '25px',
                  cursor: 'pointer',
                }}
              >
                <B1 color={distrib.dark}>
                  {distrib.name}
                </B1>
              </div>
            ))}

            {stateWcFilters.map((distrib, i) => (
              <Pill distrib={distrib} handleClick={handleWcClick} />
            ))}
          </div>
        )
        : null}

    </div>

  );
}

function Pill(props) {
  const { distrib, handleClick } = props;

  return (
    <div
      key={distrib.name}
      onClick={() => handleClick(distrib)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: distrib.pastel,
        border: `2px solid ${distrib.dark}`,
        borderRadius: '35px',
        width: '65px',
        height: '25px',
        cursor: 'pointer',
      }}
    >
      <B1 color={distrib.dark}>
        {distrib.name}
      </B1>
    </div>
  );
}

export default FiltersDisplay;
