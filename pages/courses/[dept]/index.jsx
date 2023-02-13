import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import stylesp from '../../../styles/ProfessorInfo.module.css';
import styles from '../../../styles/components/SearchPage.module.css';
import {
  H2, H3, B1, A,
} from '../../../components/ui/typography';
import { fetchDeptCourses } from '../../../actions';
import { cardColors } from '../../../data/colors';
import CourseTitleCard from '../../../components/CourseTitleCard';

export default function DepartmentCourses() {
  const router = useRouter();
  const { dept } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeptCourses(dept));
  }, []);
  const department = useSelector((reduxState) => reduxState.courses.deptCourses);
  if (!department || !department.department) {
    dispatch(fetchDeptCourses(dept));
    return (
      <B1>Loading...</B1>
    );
  }

  return (
    <div className={stylesp.container}>
      <H2>{`${dept} Courses`}</H2>
      <H3>{`${department.department.name}`}</H3>
      <Link href="/departments" key="other"><A>Explore other departments</A></Link>
      {' or '}
      <Link href={`/departments/${dept}`} key="deptPage"><A>go to department homepage</A></Link>
      <div className={styles.depts}>

        {department.courses ? department.courses.map((course, i) => (
          <CourseTitleCard key={`${course.courseNum}`} course={course} color={cardColors[i % cardColors.length]} />
        )) : ''}
      </div>
    </div>
  );
}
