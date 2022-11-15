/* eslint-disable no-unused-vars */
import React from 'react';
import { A, H3 } from '../ui/typography';
import CourseTitleCard from '../CourseTitleCard';
import Professor from '../Professor';
import styles from '../../styles/components/SearchPage.module.css';
import DepartmentCard from '../DepartmentCard';

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
  const { searchResults, depts } = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <H3>Recent Searches</H3>
        <A>See All</A>
      </div>
      <div className={styles.resultContainer}>
        {searchResults ? searchResults.map((course, i) => (
          <CourseTitleCard
            key={course.courseName}
            course={course}
            color={cardColors[i % cardColors.length]}
          />
        )) : ''}
        <Professor professor={ProfessorMockData} />
      </div>

      <div className={styles.header}>
        <H3>Browse Departments</H3>
      </div>
      <div className={styles.depts}>
        {depts ? depts.map((dept, i) => (
          <DepartmentCard
            key={dept.name}
            dept={dept}
            color={cardColors[i % cardColors.length]}
          />
        )) : ''}
      </div>

    </div>
  );
}

export default DefaultBody;
