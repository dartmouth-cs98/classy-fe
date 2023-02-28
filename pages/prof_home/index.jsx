/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfessorHome } from '../../actions';
import CourseSimple from '../../components/profWaitlist/CourseSimple';
import {
  A, H3, H1, B1,
} from '../../components/ui/typography';
import styles from '../../styles/components/ProfHome.module.css';

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function ProfHome() {
  const name = 'Lorie Loeb';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfessorHome(name));
  }, []);

  const currentProfHome = useSelector((reduxState) => reduxState.profHome.current);
  if (!currentProfHome) {
    dispatch(fetchProfessorHome(name));
    return <B1 key="loading">Loading...</B1>;
  }

  const pic = 'https://web.cs.dartmouth.edu/sites/department_computer_science/files/styles/profile_portrait/public/LorieLoeb.png?itok=A6088OY8';
  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '20px',
      }}
      >
        <img className={styles.pic} src={pic} alt="Lorie" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <A>Edit Profile</A>
          <H1>{currentProfHome?.professor?.name}</H1>
          <B1 color="var(--darkest-grey)" style={{ marginTop: '5px' }}>
            {`Professor of ${currentProfHome?.professor?.departments?.join(', ')}`}
          </B1>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <H3>My Courses</H3>
        </div>

        <div className={styles.resultContainer}>
          {currentProfHome?.courses?.map((course, i) => (
            <CourseSimple
              key={course?.courseName}
              course={course}
              color={cardColors[i % cardColors.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfHome;
