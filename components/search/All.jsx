/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import { H3 } from '../ui/typography';
import CourseTitleCard from '../CourseTitleCard';
import Professor from '../Professor';
import styles from '../../styles/components/SearchPage.module.css';
import { cardColors } from '../../data/colors';

const course = {
  courseNumber: 'COSC 52',
  courseName: 'Introduction to Object Oriented Programming',
  term: '21F',
  quality: '4.0',
  difficulty: '3.0 (3)',
  hrsPerWeek: '3.0 (3)',
  median: 'A-',
  reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
  distribs: ['TLA', 'NW'],
};

const ProfessorMockData = [
  {
    name: 'Tim Tregubov',
    department: 'Computer Science',
    pic: 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6',
  },
  {
    name: 'Natalie Svoboda',
    department: 'Computer Science',
    pic: 'https://pbs.twimg.com/profile_images/918136553028882435/vB61vRNP_400x400.jpg',
  },
  {
    name: 'Timothy Pierson',
    department: 'Computer Science',
    pic: 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/pierson.png?itok=QIY5zrcr',
  },
];

function All(props) {
  const { results } = props;

  return (
    <div>
      <div className={styles.horizontalContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <H3>Top Result</H3>
          </div>
          <div className={styles.resultContainer}>
            <CourseTitleCard course={course} color={cardColors[0]} />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.header}>
            <H3>Featured Professors</H3>
          </div>
          <div className={styles.resultContainer}>
            {ProfessorMockData.map((professor, i) => (
              <Professor key={professor.name} professor={professor} />
            ))}
          </div>
        </div>

      </div>

      <div className={styles.header}>
        <H3>Featured Courses</H3>
      </div>
    </div>
  );
}

export default All;
