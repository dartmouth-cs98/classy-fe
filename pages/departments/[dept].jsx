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
      <Link href="/departments"><A>See all departments</A></Link>
      <br />
      <br />
      <H3>Department Courses</H3>
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
      <br />
      <br />
      <H3>Department Professors</H3>
      <div className={stylese.horizscroll}>
        {currentDept.professors.map((professor, index) => (
          <ExploreTile
            professorName={professor.name}
            professorDepts={professor.departments}
            index={index}
          />
        ))}
      </div>

      <br />
      <br />
      <H3>Department Reviews</H3>
      {currentDept.reviews && currentDept.reviews.length > 0
        ? currentDept.reviews.map((review) => review) : <B1>No Reviews</B1>}
    </div>
  );
}

export default Department;
