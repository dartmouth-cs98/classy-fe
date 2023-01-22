/* eslint-disable react/jsx-filename-extension */
// import Head from 'next/head';
// import SideNavbar from '../../components/SideNavbar';
import React from 'react';
import styles from '../../styles/WaitlistHome.module.css';
import WaitlistCard from '../../components/WaitlistCard';
import {
  H2,
} from '../../components/ui/typography';

const cardColors = [
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
  { pastel: '#FCF0E3', dark: '#BA7D37' },
];

const waitlistMockData = {
  courses: [
    {
      courseDepartment: 'COSC',
      courseNum: '52',
      courseName: 'Full-Stack Web Development',
      waitlistPos: 10,
      waitlistTotal: 76,
      terms: '23F',
      joined: 'June 21, 2022',
    },
    {
      courseDepartment: 'COSC',
      courseNum: '74',
      courseName: 'Machine Learning and Statistical Data Analysis',
      waitlistPos: 2,
      waitlistTotal: 14,
      terms: '23W',
      joined: 'April 10, 2022',
    },
    {
      courseDepartment: 'MATH',
      courseNum: '001',
      courseName: 'Introduction to Calculus',
      waitlistPos: 5,
      waitlistTotal: 7,
      remainingTerms: 1,
      terms: '25F',
      joined: 'August 14, 2022',
    },
    {
      courseDepartment: 'ECON',
      courseNum: '001',
      courseName: 'The Price System: Analysis, Problems, and Policies',
      waitlistPos: 32,
      waitlistTotal: 35,
      remainingTerms: 2,
      terms: '23X',
      joined: 'November 11, 2022',
    },
  ],
};

export default function WaitlistHome() {
  return (
    <div className={styles.container}>
      <H2 color="#14121D">Waitlisted Courses</H2>
      <p color="#14121D">Join a new waitlist from the course info page.</p>
      <div className={styles.waitlistCardsContainer}>
        {waitlistMockData.courses.map((course, i) => (
          <WaitlistCard course={course} color={cardColors[i % cardColors.length]} />
        ))}
      </div>
    </div>
  );
}
