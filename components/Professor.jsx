/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/CourseProfessorCard.module.css';
import { H4, B1 } from './ui/typography';

const ProfessorMockData = {
  name: 'Tim Tregubov',
  department: 'Computer Science',
  pic: 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6',
};

function Professor(props) {
  const { professor } = props;
  const { pic, name, department } = professor;
  return (
    <Link href="/professorInfo">
      <div className={styles.card}>
        <img className={styles.pic} src={pic} alt="Tim" />
        <H4 style={{ margin: '0px' }}>{name}</H4>
        <B1>{department}</B1>
      </div>
    </Link>
  );
}

export default Professor;
