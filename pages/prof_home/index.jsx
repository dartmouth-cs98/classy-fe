/* eslint-disable no-unused-vars */
import React from 'react';
import CourseSimple from '../../components/profWaitlist/CourseSimple';
import {
  A, H3, H1, B1,
} from '../../components/ui/typography';
import styles from '../../styles/components/ProfHome.module.css';

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
      location: 'ECSC202',
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
      location: 'ECSC101',
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
      location: 'LSC101',
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

function ProfHome() {
  const pic = 'https://web.cs.dartmouth.edu/sites/department_computer_science/files/styles/profile_portrait/public/LorieLoeb.png?itok=A6088OY8';
  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '20px',
      }}
      >
        <img className={styles.pic} src={pic} alt="Lorie" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <A>Edit Profile</A>
          <H1>Lorie Loeb</H1>
          <B1 color="var(--darkest-grey)" style={{ marginTop: '5px' }}>Research Professor of Computer Science and Director of Digital Arts </B1>
          <B1 color="var(--darkest-grey)" style={{ marginTop: '5px' }}>Faculty Director of DALI lab</B1>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <H3>My Courses</H3>
        </div>

        <div className={styles.resultContainer}>
          {professorInfoMockData.featuredCourses.map((course, i) => (
            <CourseSimple
              key={course.courseName}
              course={course}
              color={cardColors[i % cardColors.length]}
            />
          ))}
        </div>
      </div>

    </div>

  );
}

export default ProfHome;
