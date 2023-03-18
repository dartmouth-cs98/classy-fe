/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, TextField, Chip } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { H4, A } from '../ui/typography';
import styles from '../../styles/components/Modal.module.css';
import MajorMinorSearchDropdown from '../MajorMinorSearchDropdown';
import { updateUser, fetchUser } from '../../actions';

function AddMajorMinor(props) {
  const {
    setAdding, adding, handleDelete, depts, addingMajor, addingMinor, title, user, addDept,
  } = props;

  const dispatch = useDispatch();

  const [inputValueDept, setInputValueDept] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  // const [inputValueMinor, setInputValueMinor] = useState('');
  // const [selectedMinor, setSelectedMinor] = useState('');

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
        {depts?.map((majorMinor) => (
          <Chip
            key={majorMinor._id}
            style={{ marginBottom: '10px' }}
            variant="outlined"
            onDelete={() => {
              handleDelete(majorMinor.name);
            }}
            label={majorMinor.name}
          />
        ))}
      </div>

      {adding
        ? (
          <div className={styles.horizontalContainer} style={{ gap: '5px' }}>
            <MajorMinorSearchDropdown
              inputValue={inputValueDept}
              setInputValue={setInputValueDept}
              selectedDept={selectedDept}
              setSelectedDept={setSelectedDept}
              depts={depts}
            />
            <Button
              disabled={!selectedDept}
              style={{ width: '100px' }}
              variant="contained"
              onClick={() => {
                addDept(selectedDept);
                setInputValueDept('');
                setSelectedDept(null);
                setAdding(false);
              }}
            >
              Add
            </Button>
            <Button style={{ width: '100px' }} variant="outlined" onClick={() => setAdding(false)}>Cancel</Button>
          </div>
        )
        : null}

    </div>
  );
}

export default AddMajorMinor;
