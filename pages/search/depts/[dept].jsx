/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/components/SearchPage.module.css';
import { H2, H3, A } from '../../../components/ui/typography';
import Professor from '../../../components/Professor';
import SearchBar from '../../../components/search/SearchBar';
import TabBar from '../../../components/search/TabBar';
import SearchResults from '../../../components/search/SearchResults';
import SearchBarPage from '../../../components/search/SearchBarPage';

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

function Department(props) {
  const router = useRouter();
  const { dept } = router.query;

  const [searchInput, setSearchInput] = useState('');
  const [tab, setTab] = useState('All');
  const [searchResults, setSearchResults] = useState(null);

  const input = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  const onBlur = (e) => {
    window.setTimeout(() => e.target.focus(), 0);
  };

  return (
    <SearchBarPage>
      <div>
        <div className={styles.container}>
          <H2 style={{ marginTop: 60 }}>
            Computer Science
            {' ('}
            {dept}
            ) Department
          </H2>
          <div className={styles.header}>
            <H3>Professors</H3>
            <A>See All</A>
          </div>
          <div className={styles.resultContainer}>
            {ProfessorMockData.map((professor, i) => (
              <Professor key={professor.name} professor={professor} />
            ))}
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.header}>
            <H3>Courses</H3>
          </div>
          <div className={styles.resultContainer}>

          </div>
        </div>
      </div>
    </SearchBarPage>
  );
}

export default Department;
