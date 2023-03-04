/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import CourseTable from '../CourseTable';
import styles from '../../styles/components/SearchPage.module.css';
import Professor from '../Professor';
import FriendCard from '../social/FriendCard';

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
  // const { tab, results } = props;
  const searchReducer = useSelector((reduxState) => reduxState.search);
  const {
    searchResults, searchProfResults, searchStudentResults, tab,
  } = searchReducer;
  // console.log(searchResults);
  // console.log(tab);

  if (tab === 'Courses') {
    return (
      <div className={styles.courses}>
        <CourseTable courses={searchResults} />
      </div>
    );
  }
  if (tab === 'Professors') {
    return (
      <div className={styles.container}>
        <div className={styles.profs}>
          {searchProfResults ? searchProfResults.map((professor) => (
            <Professor key={professor._id} professor={professor} />
          )) : null}
        </div>
      </div>
    );
  }
  if (tab === 'Students') {
    return (
      <div>
        {searchStudentResults ? searchStudentResults.map((student) => (
          <FriendCard key={student._id} student={student} />
        )) : null}
      </div>

    );
  }
}

export default SearchResults;
