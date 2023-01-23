/* eslint-disable no-unused-vars */
import React from 'react';
import {
  A, H3, H1, B1,
} from '../../components/ui/typography';
import CourseTitleCardHome from '../../components/CourseTitleCardHome';
import styles from '../../styles/components/HomePage.module.css';

const allCourses = [
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
    timeBlock: '9L',
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
    timeBlock: '10',
    location: 'LSC101',
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
    timeBlock: '2A',
    location: 'ECSC101',
  },
  // {
  //   courseNumber: 'COSC 98.02',
  //   courseName: 'Senior Design and Implementation II',
  //   term: '19W',
  //   quality: '5.0',
  //   difficulty: '5.0 (3)',
  //   hrsPerWeek: '3.0 (3)',
  //   median: 'A',
  //   reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
  //   distribs: ['TLA', 'NW'],
  //   timeBlock: '2A',
  //   location: 'ECSC101',
  // },
];

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function HomePage() {
  const pic = 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6';
  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '20px',
      }}
      >
        <img className={styles.pic} src={pic} alt="Tim" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <A>Edit Profile</A>
          <H1>Tim Tregubov</H1>
          <B1 color="var(--darkest-grey)" style={{ marginTop: '5px' }}>Computer Science Major • Economics Minor </B1>
        </div>
      </div>

      <div className={styles.box} style={{ backgroundColor: 'var(--navy)' }}>
        <div style={{
          display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-evenly',
        }}
        >
          {allCourses.map((course, i) => (
            <CourseTitleCardHome
              key={course.courseName}
              course={course}
              color={cardColors[i % cardColors.length]}
              home
            />
          ))}
        </div>
      </div>

      <div className={styles.box} style={{ backgroundColor: 'var(--lightest-grey)' }}>
        <div className={styles.header}>
          <H3>Shopping Cart for Next Term</H3>
          <A>Edit</A>
        </div>
      </div>

      <div className={styles.box} style={{ backgroundColor: 'var(--lightest-grey)' }}>
        <div className={styles.header}>
          <H3>Completed Courses</H3>
          <A>Edit</A>
        </div>
      </div>

      <div className={styles.box} style={{ backgroundColor: 'var(--lightest-grey)' }}>
        <div className={styles.header}>
          <H3>Your Progress</H3>
        </div>
      </div>

    </div>

  );
}

export default HomePage;
