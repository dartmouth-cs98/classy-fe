/* eslint-disable no-unused-vars */
import React from 'react';
import {
  TextLabel,
} from '../../components/ui/typography';
import ProfessorCard from '../../components/professorInfo/ProfessorCard';
import CourseTitleCard from '../../components/CourseTitleCard';
import CourseTable from '../../components/CourseTable';
// eslint-disable-import/no-unresolved
import styles from '../../styles/professorInfo.module.css';
import { cardColors } from '../../constants/colors';
import { professorInfoMockData } from '../../constants/mockData';

function ProfessorInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.professorContainer}>
        {/* <ProfessorCard /> */}
      </div>
      <div className={styles.featuredCoursesContainer}>
        <TextLabel color="var(--darkest-grey)">Featured Courses</TextLabel>
        <div className={styles.featuredCardsContainer}>
          {/* {professorInfoMockData.featuredCourses.map((course, i) => (
            <CourseTitleCard
              course={course}
              color={cardColors[i % cardColors.length]}
              key={course.courseName}
            />
          ))} */}
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
