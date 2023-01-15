/* eslint-disable no-unused-vars */
import React from 'react';
import { A, H3 } from '../ui/typography';
import CourseTitleCard from '../CourseTitleCard';
import Professor from '../Professor';
import styles from '../../styles/components/SearchPage.module.css';
import DepartmentCard from '../DepartmentCard';
import { cardColors } from '../../data/colors';
import Departments from '../../pages/departments';

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
