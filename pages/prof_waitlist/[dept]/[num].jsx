/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { fetchCourse, fetchProfessor } from '../../../actions';
import { B1, H1 } from '../../../components/ui/typography';

import styles from '../../../styles/ProfWaitlist.module.css';
import ProfWaitlistTerm from '../../../components/profWaitlist/ProfWaitlistTerm';

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function ProfWaitlist() {
  // prof hide nav
  const router = useRouter();
  const { dept, num } = router.query;
  const name = 'Lorie Loeb';

  const dispatch = useDispatch();
  const course = useSelector((reduxState) => reduxState.courses.current.course);
  const currentProfessor = useSelector(
    (reduxState) => reduxState.professors.current,
  );
  if (
    !course
    || course.courseDept !== dept
    || course.courseNum !== num
  ) {
    dispatch(fetchCourse(dept, num));
    return <B1 key="loading">Loading...</B1>;
  }

  if (!currentProfessor) {
    dispatch(fetchProfessor(name));
    return <B1 key="loading">Loading...</B1>;
  }
  console.log('the course is', course);

  const loadProfOfferings = () => course?.offerings?.map((offering, i) => {
    if (offering.professors.includes(name)) {
      if (offering.waitlist.length + offering.priorityWaitlist.length > 0) {
        return (
          <ProfWaitlistTerm
            color={cardColors[i % cardColors.length]}
            key={offering.professors}
            i={i}
            courseId={course?._id}
            dept={course.courseDept}
            num={course.courseNum}
            offering={offering}
          />
        );
      }
    }
    return '';
  });

  return (
    <div className={styles.all}>
      <div className={styles.header}>
        <H1>{`${dept} ${num} Waitlists`}</H1>
      </div>
      {loadProfOfferings().join(',') !== '' ? (
        <>
          <Alert severity="info" style={{ width: '100%', marginBottom: '1em' }}>
            Changes will be updated once you refresh the page
          </Alert>
          <br />
        </>
      ) : (
			  ''
      )}

      <div className={styles.body}>
        {loadProfOfferings().join(',') !== '' ? (
				  loadProfOfferings()
        ) : (
          <B1>No students on any waitlists yet!</B1>
        )}
      </div>
    </div>
  );
}

export default ProfWaitlist;
