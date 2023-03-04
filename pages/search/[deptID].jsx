/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/components/SearchPage.module.css';
import { H2, H3, A } from '../../components/ui/typography';
import Professor from '../../components/Professor';
import SearchBarPage from '../../components/search/SearchBarPage';
import { fetchDepartment, clearDepartment } from '../../actions/searchActions';
import CourseTable from '../../components/CourseTable';

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
  const { deptID } = router.query;
  const [showAll, setShowAll] = useState(false);
  // console.log(deptID);

  const dispatch = useDispatch();
  const department = useSelector((reduxState) => reduxState.search.currentDepartment);

  useEffect(() => {
    if (deptID) {
      dispatch(fetchDepartment(deptID));
    }
  }, [deptID]);

  useEffect(() => {
    dispatch(clearDepartment());
  }, []);

  return (
    <SearchBarPage>
      {department.name
        ? (
          <div>
            <div className={styles.container}>
              <H2 style={{ marginTop: 10 }}>
                {department.name}
                {' ('}
                {department?.codes?.join(', ')}
                )
              </H2>
              <div className={styles.header}>
                <H3>Professors</H3>
                {showAll
                  ? <A onClick={() => setShowAll(false)}>See Less</A>
                  : <A onClick={() => setShowAll(true)}>See All</A>}

              </div>
              <div className={styles.resultContainer} style={{ height: showAll ? 'auto' : '225px' }}>
                {department?.professors?.map((professor, i) => (
                  <Professor key={professor.name} professor={professor} />
                ))}
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.header}>
                <H3>Courses</H3>
              </div>
              <div className={styles.resultContainer}>
                <CourseTable courses={department?.courses} />
              </div>
            </div>
          </div>
        ) : null}

    </SearchBarPage>
  );
}

export default Department;
