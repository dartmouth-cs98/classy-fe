/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { A, H3 } from '../../components/ui/typography';
import CourseTitleCard from '../../components/CourseTitleCard';
import Professor from '../../components/Professor';
import styles from '../../styles/components/SearchPage.module.css';
import { departmentMockData } from '../../data/departments';
import DepartmentCard from '../../components/DepartmentCard';
import SearchBarPage from '../../components/search/SearchBarPage';
import { fetchDepartments } from '../../actions/searchActions';

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

const ProfessorMockData = {
  name: 'Tim Tregubov',
  department: 'Computer Science',
  pic: 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6',
};

function SearchPage() {
  const dispatch = useDispatch();
  const departments = useSelector((reduxState) => reduxState.search.departments);
  useEffect(() => {
    dispatch(fetchDepartments());
  }, []);

  return (
    <SearchBarPage>
      <div className={styles.container}>
        {/* <div className={styles.header}>
          <H3>Recent Searches</H3>
          <A>See All</A>
        </div>
        <div className={styles.resultContainer}>
          {professorInfoMockData.featuredCourses.map((course, i) => (
            <CourseTitleCard
              key={course.courseName}
              course={course}
              color={cardColors[i % cardColors.length]}
            />
          ))}
          <Professor professor={ProfessorMockData} />
        </div> */}

        <div className={styles.header}>
          <H3>Browse Departments</H3>
        </div>
        <div className={styles.depts}>
          {departments.map((dept, i) => (
            <DepartmentCard
              key={dept._id}
              dept={dept}
              color={cardColors[i % cardColors.length]}
            />
          ))}
        </div>

      </div>
    </SearchBarPage>
  );
}

export default SearchPage;

// import React, { useState, useCallback, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CourseData from '../../data/data';
// import TabBar from '../../components/search/TabBar';
// import SearchBar from '../../components/search/SearchBar';
// import DefaultBody from '../../components/search/DefaultBody';
// import SearchResults from '../../components/search/SearchResults';
// import { fetchSearch } from '../../actions';

// function SearchPage() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchSearch());
//   }, []);
//   const searchContent = useSelector((reduxState) => reduxState.search.current);
//   const [searchInput, setSearchInput] = useState('');
//   const [tab, setTab] = useState('All');
//   const [searchResults, setSearchResults] = useState(null);

//   const input = useCallback((inputElement) => {
//     if (inputElement) {
//       inputElement.focus();
//     }
//   }, []);

//   const onBlur = (e) => {
//     window.setTimeout(() => e.target.focus(), 0);
//   };

//   return (
//     <div style={{ padding: '20px 80px 50px 275px' }}>
//       <SearchBar
//         searchInput={searchInput}
//         setSearchInput={setSearchInput}
//         input={input}
//         setSearchResults={setSearchResults}
//         onBlur={onBlur}
//       />
//       {
//         searchInput // if search input exists, show tab bar page
//           ? (
//             <div>
//               <TabBar tab={tab} setTab={setTab} />
//               <SearchResults tab={tab} results={searchResults} />
//             </div>
//           )
//           : ( // else show default page
//             <DefaultBody searchResults={searchContent.courses} depts={searchContent.departments} />
//           )
