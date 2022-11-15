import React, { useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CourseInfoSubtitle from '../../../components/CourseInfoSubtitle';
import Glance from '../../../components/Glance';
import CourseInfoTitle from '../../../components/CourseInfoTitle';
import Offered from '../../../components/Offered';
import Medians, { convertMedian } from '../../../components/Medians';
import StudentsSay from '../../../components/StudentsSay';
import { fetchCourse } from '../../../actions';
import getPrereqs from '../../../data/courseinfohelpers';
import styles from '../../../styles/ExploreHome.module.css';

import {
  B1,
} from '../../../components/ui/typography';

export default function CourseInfo() {
//   const data = CourseData();
  const router = useRouter();
  const { dept, num } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse(dept, num));
  }, []);

  const currentCourse = useSelector((reduxState) => reduxState.courses.current);

  if (!currentCourse) {
    dispatch(fetchCourse(dept, num));
    return (
      <B1>Loading...</B1>
    );
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Classy</title>
        <meta name="description" content="class selection made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CourseInfoTitle course={currentCourse || { dept, num }} />
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

        <CourseInfoSubtitle text="Prerequisites" />
        {currentCourse ? getPrereqs(currentCourse.required, currentCourse.counts) : ''}

        <CourseInfoSubtitle text="What Students Say" />
        <StudentsSay
          workload={currentCourse ? currentCourse.workload : 'Unknown'}
          difficulty={currentCourse ? currentCourse.difficulty : 'Unknown'}
          quality={currentCourse ? currentCourse.quality : 'Unknown'}
        />

        <CourseInfoSubtitle text="Offered" />
        {currentCourse ? <Offered course={currentCourse} /> : <B1>No Data</B1>}

        <CourseInfoSubtitle text="Medians" />
        {currentCourse ? <Medians medians={currentCourse.medians} /> : <B1>No Data</B1>}
        {/* <h2 className={styles.title}>Reviews</h2> */}
      </main>
    </div>
  );
}
