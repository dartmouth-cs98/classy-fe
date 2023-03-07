import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  B1, H3,
} from '../../components/ui/typography';
import ProfessorCard from '../../components/professors/ProfessorCard';
import CourseTable from '../../components/CourseTable';
import styles from '../../styles/ProfessorInfo.module.css';
import { fetchProfessor } from '../../actions';

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
  const prof = currentProfessor.professor;

  return (
    <div className={styles.container}>
      <div className={styles.professorContainer}>
        <ProfessorCard
          name={prof?.name}
          departments={prof?.departments}
          profileImageUrl={prof?.user?.profileImageUrl}
        />
      </div>
      <div className={styles.courseTableContainer}>
        <H3 color="var(--darkest-grey)">All Courses</H3>
        <CourseTable
          courses={currentProfessor.courses}
          tableType="profInfo"
          professorName={prof?.name}
        />
      </div>
    </div>
  );
}

export default ProfessorInfo;
