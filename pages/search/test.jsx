/* eslint-disable no-unused-vars */
import React from 'react';
import {
  A, H3, H1, B1,
} from '../../components/ui/typography';
import CourseTitleCard from '../../components/CourseTitleCard';
import styles from '../../styles/components/HomePage.module.css';

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
      <div>
        <img className={styles.pic} src={pic} alt="Tim" />
        <div>
          <A>Edit Profile</A>
          <H1>Tim Tregubov</H1>
          <B1 color="var(--darkest-grey)">Computer Science Major • Economics Minor </B1>
          <H3>test</H3>
        </div>
        <A>Edit Profile</A>
        <H1>Tim Tregubov</H1>
        <B1>Computer Science Major • Economics Minor </B1>
        <H3>test</H3>
      </div>

    </div>
  );
}

export default HomePage;
