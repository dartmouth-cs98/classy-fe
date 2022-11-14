import React from 'react';
import {
  TextLabel,
} from '../../components/ui/typography';
import ProfessorCard from '../../components/professorInfo/ProfessorCard';
import CourseTitleCard from '../../components/CourseTitleCard';
import CourseTable from '../../components/CourseTable';
import styles from '../../styles/professorInfo.module.css';
import SideNavbar from '../../components/SideNavbar';

const professorInfoMockData = {
  featuredCourses: [{
    courseNumber: 'COSC 52',
    courseName: 'Full Stack Web Development',
    term: '21F',
    quality: '4.0',
    difficulty: '3.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A-',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
  },
  {
    courseNumber: 'COSC 98.01',
    courseName: 'Senior Design and Implementation I',
    term: '19F',
    quality: '5.0',
    difficulty: '4.0 (3)',
    hrsPerWeek: '3.0 (4)',
    median: 'A',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
  },
  {
    courseNumber: 'COSC 98.02',
    courseName: 'Senior Design and Implementation II',
    term: '19W',
    quality: '5.0',
    difficulty: '5.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
  },
  ],
  allCourses: [
    {
      courseNumber: 'COSC 52',
      courseName: 'Full Stack Web Development',
      term: '21F',
      quality: '4.0',
      difficulty: '3.0 (3)',
      hrsPerWeek: '3.0 (3)',
      median: 'A-',
      reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
      distribs: ['TLA', 'NW'],
    },
    {
      courseNumber: 'COSC 98.01',
      courseName: 'Senior Design and Implementation I',
      term: '19F',
      quality: '5.0',
      difficulty: '4.0 (3)',
      hrsPerWeek: '3.0 (4)',
      median: 'A',
      reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
      distribs: ['TLA', 'NW'],
    },
    {
      courseNumber: 'COSC 98.02',
      courseName: 'Senior Design and Implementation II',
      term: '19W',
      quality: '5.0',
      difficulty: '5.0 (3)',
      hrsPerWeek: '3.0 (3)',
      median: 'A',
      reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
      distribs: ['TLA', 'NW'],
    },
  ],
};

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
];

function ProfessorInfo() {
  return (
    <div className={styles.container}>
      <SideNavbar />
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
