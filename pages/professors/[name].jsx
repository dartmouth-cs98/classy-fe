import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  B1, H3,
} from '../../components/ui/typography';
import ProfessorCard from '../../components/professors/ProfessorCard';
import CourseTitleCard from '../../components/CourseTitleCard';
import CourseTable from '../../components/CourseTable';
// eslint-disable-import/no-unresolved
import styles from '../../styles/ProfessorInfo.module.css';
import { fetchProfessor } from '../../actions';

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
];

function ProfessorInfo() {
  const router = useRouter();
  const { name } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfessor(name));
  }, []);

  const currentProfessor = useSelector((reduxState) => reduxState.professors.current);

  if (!currentProfessor.professor || currentProfessor.professor.name !== name) {
    dispatch(fetchProfessor(name));
    return (
      <B1>Loading...</B1>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.professorContainer}>
        <ProfessorCard
          name={currentProfessor.professor.name}
          departments={currentProfessor.professor.departments}
        />
      </div>
      <div className={styles.courseTableContainer}>
        <H3 color="var(--darkest-grey)">All Courses</H3>
        <CourseTable
          courses={currentProfessor.courses}
          tableType="profInfo"
          professorName={currentProfessor.professor.name}
        />
      </div>
    </div>
  );
}

export default ProfessorInfo;
