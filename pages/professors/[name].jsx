import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useEffect } from 'react-redux';
import {
  TextLabel,
} from '../../components/ui/typography';
import ProfessorCard from '../../components/professorInfo/ProfessorCard';
import CourseTitleCard from '../../components/CourseTitleCard';
import CourseTable from '../../components/CourseTable';
import styles from '../../styles/professorInfo.module.css';
import { fetchProfessor } from '../../../actions';

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

  return (
    <div className={styles.container}>
      <div className={styles.professorContainer}>
        <ProfessorCard />
      </div>
      <div className={styles.featuredCoursesContainer}>
        <TextLabel color="var(--darkest-grey)">Featured Courses</TextLabel>
        <div className={styles.featuredCardsContainer}>
          {professorInfoMockData.featuredCourses.map((course, i) => (
            <CourseTitleCard course={course} color={cardColors[i % cardColors.length]} />
          ))}
        </div>
      </div>
      <div className={styles.courseTableContainer}>
        <TextLabel color="var(--darkest-grey)">All Courses</TextLabel>
        <CourseTable />
      </div>
    </div>
  );
}

export default ProfessorInfo;
