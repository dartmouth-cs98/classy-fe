/* eslint-disable no-unused-vars */
import React from 'react';
import { A, H3 } from '../ui/typography';
import CourseTitleCard from '../CourseTitleCard';
import Professor from '../Professor';
import styles from '../../styles/components/SearchPage.module.css';
import { departmentMockData } from '../../data/departments';
import DepartmentCard from '../DepartmentCard';

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
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

const ProfessorMockData = {
  name: 'Tim Tregubov',
  department: 'Computer Science',
  pic: 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6',
};

function DefaultBody(props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <H3>Recent Searches</H3>
        <A>See All</A>
      </div>
      <div className={styles.resultContainer}>
        {professorInfoMockData.featuredCourses.map((course, i) => (
          <CourseTitleCard
            key={course.courseName}
            course={course}
            color={cardColors[i % cardColors.length]}
          />
        ))}
        <Professor professor={ProfessorMockData} />
      </div>

      <div className={styles.header}>
        <H3>Browse Departments</H3>
      </div>
      <div className={styles.depts}>
        {departmentMockData.map((dept, i) => (
          <DepartmentCard
            key={dept.abbr}
            dept={dept}
            color={cardColors[i % cardColors.length]}
          />
        ))}
      </div>

    </div>
  );
}

export default DefaultBody;
