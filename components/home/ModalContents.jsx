/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button } from '@mui/material';
// import Modal from '../Modal';
// import SaveButton from './SaveButton';
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table';
import { H3, H4, A } from '../ui/typography';
import CourseSearchDropdown from '../CourseSearchDropdown';
// import { clearDropdown } from '../../actions';
import styles from '../../styles/components/Modal.module.css';
import { updateUser, fetchUser } from '../../actions';

function ModalContents(props) {
  const {
    user, adding, setAdding,
    mode,
  } = props;

  const dispatch = useDispatch();

  let courses;

  const addCourse = (course) => {
    if (mode === 'completed') {
      dispatch(updateUser(
        user?._id,
        {
          user,
        },
        {
          ...user.student,
          coursesTaken: user.student.coursesTaken.concat(course),
        },
      ));
    }
    if (mode === 'cart') {
      dispatch(updateUser(
        user?._id,
        {
          user,
        },
        {
          ...user.student,
          shoppingCart: user.student.shoppingCart.concat(course),
        },
      ));
    }
    if (mode === 'current') {
      dispatch(updateUser(
        user?._id,
        {
          user,
        },
        {
          ...user.student,
          currentCourses: user.student.currentCourses.concat(course),
        },
      ));
    }
  };

  if (mode === 'completed') {
    courses = user?.student?.coursesTaken;
  }
  if (mode === 'cart') {
    courses = user?.student?.shoppingCart;
  }
  if (mode === 'current') {
    courses = user?.student?.currentCourses;
  }

  const [inputValue, setInputValue] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

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
          user={user}
        />
      </div>
      {adding ? (
        <div className={styles.horizontalContainer} style={{ gap: '5px', justifyContent: 'center' }}>
          <CourseSearchDropdown
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            courses={courses}
            addCourse={addCourse}
          />
          <Button
            style={{ width: '100px' }}
            variant="contained"
            onClick={() => {
              addCourse(selectedCourse);
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
