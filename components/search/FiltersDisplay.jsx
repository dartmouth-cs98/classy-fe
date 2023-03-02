/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Checkbox, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '../Modal';
import {
  H2, H3, H4, B1, TextLabel,
} from '../ui/typography';
import { distribs as allDistribs, wcs as allWcs } from '../../constants/colors';
import {
  addDistribFilter, removeDistribFilter, addWcFilter, removeWcFilter, toggleNrEligible,
  toggleOfferedNext,
} from '../../actions';
import { nextTerm } from '../../constants/nextTerm';

function FiltersDisplay(props) {
  const stateDistribFilters = useSelector((reduxState) => reduxState.search.distribFilters);
  const stateWcFilters = useSelector((reduxState) => reduxState.search.wcFilters);
  const nrEligible = useSelector((reduxState) => reduxState.search.nrEligible);
  const offeredNext = useSelector((reduxState) => reduxState.search.offeredNext);
  const dispatch = useDispatch();
  const { filtersApplied, tab } = props;

  const handleDistribClick = (name) => {
    // console.log(distrib);
    const distribObj = stateDistribFilters.find((distrib) => distrib.name === name);
    dispatch(removeDistribFilter(distribObj));
  };

  const handleWcClick = (name) => {
    // console.log(distrib);
    const distribObj = stateWcFilters.find((wc) => wc.name === name);
    dispatch(removeWcFilter(distribObj));
  };

  const handleOfferedClick = () => {
    dispatch(toggleOfferedNext());
  };

  const handleNrClick = () => {
    dispatch(toggleNrEligible());
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
              <Pill
                key={distrib.name}
                name={distrib.name}
                pastelColor={distrib.pastel}
                darkColor={distrib.dark}
                handleClick={handleDistribClick}
              />
            ))}

            {stateWcFilters.map((distrib, i) => (
              <Pill
                key={distrib.name}
                name={distrib.name}
                pastelColor={distrib.pastel}
                darkColor={distrib.dark}
                handleClick={handleWcClick}
              />
            ))}

            {offeredNext ? (
              <Pill
                name={`Offered ${nextTerm}`}
                pastelColor="var(--lightest-grey)"
                darkColor="var(--darkest-grey)"
                handleClick={handleOfferedClick}
                wide
              />
            ) : null}

            {nrEligible ? (
              <Pill
                name="NR Eligible"
                pastelColor="var(--lightest-grey)"
                darkColor="var(--darkest-grey)"
                handleClick={handleNrClick}
                wide
              />
            ) : null}

          </div>
        )
        : null}

    </div>

  );
}

function Pill(props) {
  const {
    handleClick, pastelColor, darkColor, name,
  } = props;

  return (
    <Chip
      variant="outlined"
      size="small"
      label={name}
      onDelete={() => handleClick(name)}
      onClick={() => handleClick(name)}
      sx={{
        backgroundColor: pastelColor,
        borderColor: darkColor,
        '&.MuiButtonBase-root:hover': {
          bgcolor: pastelColor,
        },
        '& .MuiChip-label': {
          color: darkColor,
        },
      }}
    />

  // <div
  //   key={name}
  //   onClick={() => handleClick(name)}
  //   style={{
  //     display: 'flex',
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: pastelColor,
  //     border: `2px solid ${darkColor}`,
  //     borderRadius: '35px',
  //     width: wide ? '135px' : '65px',
  //     height: '25px',
  //     cursor: 'pointer',
  //   }}
  // >
  //   <B1 color={darkColor}>
  //     {name}
  //   </B1>
  //   <CloseIcon fontSize="small" style={{ position: 'absolute', right: '20' }} />
  // </div>
  );
}

export default FiltersDisplay;
