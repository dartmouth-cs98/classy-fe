/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import { H3 } from '../ui/typography';
import CourseTitleCard from '../CourseTitleCard';
import Professor from '../Professor';
import styles from '../../styles/components/SearchPage.module.css';

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

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

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
      <div>
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
            <H3>Professors</H3>
          </div>
          <div className={styles.resultContainer}>
            {ProfessorMockData.map((professor, i) => (
              <Professor key={professor.name} professor={professor} />
            ))}
          </div>
        </div>

      </div>

      <div className={styles.header}>
        <H3>Courses</H3>
      </div>
    </div>
  );
}

export default All;
