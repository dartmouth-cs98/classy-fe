/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Checkbox, Chip } from '@mui/material';
import Modal from '../Modal';
import {
  H2, H3, H4, B1,
} from '../ui/typography';
// import { distribs, wcs } from '../../constants/colors';

function FilterModal(props) {
  const {
    handleChange, handleClick, allFilters, stateFilters,
  } = props;
  const [optionValue, setOptionValue] = useState('Select to filter');
  //   const distribFilters = useSelector((reduxState) => reduxState.search.distribFilters);

  return (
    <div>
      <select
        value={optionValue}
        onChange={(e) => {
          handleChange(e);
          setOptionValue('Select to filter');
        }}
      >
        <option value="Select to Filter">Select to Filter</option>
        {
                allFilters.map((distrib, index) => {
                  if (stateFilters.find((distribObj) => distribObj.name === distrib.name)) {
                    return (
                      <option
                        disabled
                        key={distrib.name}
                        value={distrib.name}
                      >
                        {distrib.name}
                      </option>
                    );
                  }

                  return <option key={distrib.name} value={distrib.name}>{distrib.name}</option>;
                })
              }
        { stateFilters.length === allFilters.length
          ? <option disabled value="Select All">Select All</option> : <option value="Select All">Select All</option>}
      </select>

      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', margin: '10px 0px', gap: '10px',
      }}
      >
        {stateFilters.map((distrib, i) => (
          <div>
            <Chip
              key={distrib.name}
              variant="outlined"
              size="medium"
              label={distrib.name}
              onDelete={() => handleClick(distrib)}
              onClick={() => handleClick(distrib)}
              sx={{
                backgroundColor: distrib.pastel,
                borderColor: distrib.dark,
                '&.MuiButtonBase-root:hover': {
                  bgcolor: distrib.pastel,
                },
                '& .MuiChip-label': {
                  color: distrib.dark,
                },
              }}
            />
            {/* <div
              key={distrib.name}
              onClick={() => handleClick(distrib)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: distrib.pastel,
                border: `3px solid ${distrib.dark}`,
                borderRadius: '35px',
                width: '105px',
                height: '35px',
                margin: '5px',
                cursor: 'pointer',
              }}
            >
              <H4 color={distrib.dark}>
                {distrib.name}
              </H4>
            </div> */}
          </div>
        ))}
      </div>
    </div>

  );
}

export default FilterModal;
