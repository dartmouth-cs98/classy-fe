/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import { H3 } from '../ui/typography';
import Professor from '../Professor';
import styles from '../../styles/components/SearchPage.module.css';

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

function Professors(props) {
  const { results } = props;
  return (
    <div className={styles.container}>
      <div className={styles.profs}>
        {ProfessorMockData.map((professor, i) => (
          <Professor key={professor.name} professor={professor} />
        ))}
      </div>
    </div>
  );
}

export default Professors;
