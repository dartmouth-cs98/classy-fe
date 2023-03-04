/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Modal from '../Modal';
import SaveButton from './SaveButton';
import Table from './Table';
import { H3, H4, A } from '../ui/typography';
import CourseSearchDropdown from '../CourseSearchDropdown';
import { clearDropdown } from '../../actions';
import styles from '../../styles/components/Modal.module.css';

function ModalContents(props) {
  const {
    user, adding, setAdding,
    mode,
  } = props;

  let courses;

  if (mode === 'completed') {
    courses = user?.student?.coursesTaken;
  }
  if (mode === 'cart') {
    courses = user?.student?.shoppingCart;
  }
  if (mode === 'current') {
    courses = user?.student?.currentCourses;
  }

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  console.log(selectedCourse);

  //   const [adding, setAdding] = useState(false);

  return (
    <div style={{
      height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '10px',
    }}
    >
      <div style={{
        marginTop: '20px', width: '100%', height: '348px', overflow: 'auto',
      }}
      >
        <Table
          courses={courses}
          mode={mode}
          studentId={user?.student?._id}
          removing={!adding}
        />
      </div>
      {adding ? (
        <div className={styles.horizontalContainer} style={{ gap: '5px', justifyContent: 'center' }}>
          <CourseSearchDropdown
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
          <Button
            style={{ width: '100px' }}
            variant="contained"
            onClick={() => {
              setInputValue('');
              setSelectedCourse(null);
              setAdding(false);
            }}
          >
            Add
          </Button>
          <Button style={{ width: '100px' }} variant="outlined" onClick={() => setAdding(false)}>Cancel</Button>
        </div>

      ) : <A onClick={() => setAdding(true)}>Add Course</A>}

    </div>
  );
}

export default ModalContents;
