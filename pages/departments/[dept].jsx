import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import {
  H2, H3, B1, A,
} from '../../components/ui/typography';
import styles from '../../styles/professorInfo.module.css';
import stylese from '../../styles/ExploreHome.module.css';
import { fetchDepartment } from '../../actions';
import ExploreTile from '../../components/explore/ExploreTile';

function Department() {
  const router = useRouter();
  const { dept } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDepartment(dept));
  }, []);

  const currentDept = useSelector((reduxState) => reduxState.departments.current);
  if (!currentDept || !currentDept.department
    || !currentDept.department.codes
    || !currentDept.department.codes.includes(dept)) {
    dispatch(fetchDepartment(dept));
    return (
      <B1>Loading...</B1>
    );
  }

  return (
    <div className={styles.container}>
      <H2>
        {dept}
      </H2>
      <H3>{currentDept.department.name}</H3>
      <B1>
        {' '}
        Department Course Pages:
        {' '}
        {currentDept.department.codes.map((code) => <Link href={`/courses/${code}`}><A>{`${code}  `}</A></Link>)}
      </B1>
      {' '}
      <br />
      <Link href="/departments"><A>See all departments</A></Link>
      <br />
      <br />
      <H3>Department Courses with No Prerequisites</H3>
      { currentDept.noPrereqs ? (
        <div className={stylese.horizscroll}>
          {currentDept.noPrereqs.map((course, index) => (
            <ExploreTile
              courseDept={course.courseDept}
              courseNum={course.courseNum}
              courseTitle={course.courseTitle}
              index={index}
            />
          ))}
        </div>
      ) : <B1>No Courses</B1>}

      <br />
      <br />
      <H3>Department Courses with Prerequisites</H3>
      {currentDept.courses.length > 0 ? (
        <div className={stylese.horizscroll}>
          {currentDept.courses.map((course, index) => (
            <ExploreTile
              courseDept={course.courseDept}
              courseNum={course.courseNum}
              courseTitle={course.courseTitle}
              index={index}
            />
          ))}
        </div>
      ) : <B1>{`All ${dept} courses have no prequisites.`}</B1>}
      <br />
      <br />
      <H3>Department Professors</H3>
      {currentDept.professors ? (
        <div className={stylese.horizscroll}>
          {currentDept.professors.map((professor, index) => (
            <ExploreTile
              professorName={professor.name}
              professorDepts={professor.departments}
              index={index}
            />
          ))}
        </div>
      ) : <B1>{`There are no professors in the ${dept} department.`}</B1>}

      <br />
      <br />

    </div>
  );
}

export default Department;
