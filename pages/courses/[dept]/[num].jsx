import React, { useEffect } from 'react';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import CourseInfoSubtitle from '../../../components/courses/CourseInfoSubtitle';
import Glance from '../../../components/courses/Glance';
import CourseInfoTitle from '../../../components/courses/CourseInfoTitle';
import Offered from '../../../components/courses/Offered';
import Medians, { convertMedian } from '../../../components/courses/Medians';
import StudentsSay from '../../../components/courses/StudentsSay';
=======

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CourseInfoSubtitle from '../../../components/CourseInfoSubtitle';
import Glance from '../../../components/Glance';
import CourseInfoTitle from '../../../components/CourseInfoTitle';
import Offered from '../../../components/Offered';
import Medians, { convertMedian } from '../../../components/Medians';
import StudentsSay from '../../../components/StudentsSay';
>>>>>>> 41bb550 (connect fe to be)
import { fetchCourse } from '../../../actions';
import getPrereqs from '../../../data/courseinfohelpers';
import styles from '../../../styles/ExploreHome.module.css';

import {
  B1, A,
} from '../../../components/ui/typography';

export default function CourseInfo() {
<<<<<<< HEAD
=======
//   const data = CourseData();
>>>>>>> 41bb550 (connect fe to be)
  const router = useRouter();
  const { dept, num } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse(dept, num));
  }, []);

  const currentCourse = useSelector((reduxState) => reduxState.courses.current);

<<<<<<< HEAD
  if (!currentCourse || (currentCourse.courseDept !== dept || currentCourse.courseNum !== num)) {
=======
  if (!currentCourse) {
>>>>>>> 41bb550 (connect fe to be)
    dispatch(fetchCourse(dept, num));
    return (
      <B1>Loading...</B1>
    );
  }

  return (
    <div className={styles.container}>

      <CourseInfoTitle course={currentCourse || { dept, num }} />
      <Link href={`/courses/${dept}`}><A>{`Find more ${dept} courses`}</A></Link>
      <CourseInfoSubtitle text="Description" />
      <B1>{currentCourse ? currentCourse.description : ''}</B1>

      <CourseInfoSubtitle text="At a Glance" />
      <Glance
        distribs={currentCourse ? currentCourse.distribs : ''}
        wc={currentCourse ? currentCourse.wc : ''}
        avgMedian={currentCourse ? convertMedian(currentCourse.avgMedian) : ''}
        waitlist={currentCourse ? currentCourse.waitlist : 'Unknown'}
        dept={currentCourse ? currentCourse.courseDept : ''}
        num={currentCourse ? currentCourse.courseNum : ''}
        nr={currentCourse ? currentCourse.nrEligible : ''}
      />

<<<<<<< HEAD
      <CourseInfoSubtitle text="Prerequisites" />
      {currentCourse ? getPrereqs(currentCourse.required, currentCourse.counts) : ''}
=======
        <CourseInfoSubtitle text="At a Glance" />
        <Glance
          distribs={currentCourse ? currentCourse.distribs : ''}
          wc={currentCourse ? currentCourse.wc : ''}
          avgMedian={currentCourse ? convertMedian(currentCourse.avgMedian) : ''}
          waitlist={currentCourse ? currentCourse.waitlist : 'Unknown'}
          dept={currentCourse ? currentCourse.courseDept : ''}
          num={currentCourse ? currentCourse.courseNum : ''}
          nr={currentCourse ? currentCourse.nrEligible : ''}
        />
>>>>>>> 41bb550 (connect fe to be)

      <CourseInfoSubtitle text="What Students Say" />
      <StudentsSay
        workload={currentCourse && currentCourse.workload ? currentCourse.workload : 'Not Enough Data'}
        difficulty={currentCourse && currentCourse.difficulty ? currentCourse.difficulty : 'Not Enough Data'}
        quality={currentCourse && currentCourse.quality ? currentCourse.quality : 'Not Enough Data'}
      />

      <CourseInfoSubtitle text="Offered" />
      {currentCourse.offerings ? <Offered course={currentCourse} /> : <B1>No Data</B1>}

      <CourseInfoSubtitle text="Medians" />
      {currentCourse.medians ? <Medians medians={currentCourse.medians} /> : <B1>No Data</B1>}

      <CourseInfoSubtitle text="Reviews" />
      {currentCourse.reviews && currentCourse.reviews.length > 0
        ? currentCourse.reviews.map((review) => review) : <B1>No Reviews</B1>}
    </div>
  );
}
