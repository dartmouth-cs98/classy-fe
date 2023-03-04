/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, TextField, Chip } from '@mui/material';
import { H4, A } from '../ui/typography';
import styles from '../../styles/components/Modal.module.css';
import MajorMinorSearchDropdown from '../MajorMinorSearchDropdown';

function AddMajorMinor(props) {
  const {
    setAdding, adding, handleDelete, majorsMinors, addingMajor, addingMinor, title,
  } = props;

  const [inputValueMajor, setInputValueMajor] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');

  const [inputValueMinor, setInputValueMinor] = useState('');
  const [selectedMinor, setSelectedMinor] = useState('');

  return (
    <div className={styles.field}>
      <div className={styles.header}>
        <H4>
          {title}
          (s)
        </H4>
        {addingMinor || addingMajor
          ? <div />
          : (
            <A onClick={() => setAdding(true)}>
              Add a
              {' '}
              {title}
            </A>
          ) }
      </div>

      <div className={styles.horizontalContainer} style={{ gap: '10px' }}>
        {majorsMinors.map((majorMinor) => (
          <Chip
            style={{ marginBottom: '10px' }}
            variant="outlined"
            onDelete={(e) => handleDelete(e)}
            label={majorMinor}
          />
        ))}
      </div>

      {adding
        ? (
          <div className={styles.horizontalContainer} style={{ gap: '5px' }}>
            <TextField placeholder={title} fullWidth />
            <MajorMinorSearchDropdown
              inputValue={inputValueMajor}
              setInputValue={setInputValueMajor}
              selectedDept={selectedMajor}
              setSelectedDept={setSelectedMajor}
            />
            <Button style={{ width: '100px' }} variant="contained" onClick={() => setAdding(false)}>Add</Button>
            <Button style={{ width: '100px' }} variant="outlined" onClick={() => setAdding(false)}>Cancel</Button>
          </div>
        )
        : null}

    </div>
  );
}

export default AddMajorMinor;
