/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import CourseTable from '../CourseTable';
import styles from '../../styles/components/SearchPage.module.css';
import Professor from '../Professor';

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

function SearchResults(props) {
  const { tab, results } = props;
  const searchResults = useSelector((reduxState) => reduxState.search.searchResults);
  console.log(searchResults);

  if (tab === 'Courses') {
    return <CourseTable courses={searchResults} style={{ marginTop: '30px' }} />;
  }
  if (tab === 'Professors') {
    return (
      <div className={styles.container}>
        <div className={styles.profs}>
          {ProfessorMockData.map((professor) => (
            <Professor key={professor.name} professor={professor} />
          ))}
        </div>
      </div>
    );
  }
  if (tab === 'Users') {
    return null;
  }
}

export default SearchResults;
