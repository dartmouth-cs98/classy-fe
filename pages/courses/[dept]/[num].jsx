import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import CourseData from '../../../data/data';
import Glance from '../../../components/Glance';
import CourseInfoTitle from '../../../components/CourseInfoTitle';
import Offered from '../../../components/Offered';
import Medians, { convertMedian } from '../../../components/Medians';
import StudentsSay from '../../../components/StudentsSay';

// import { fetchCourse } from '../../../actions';
import getPrereqs from '../../../data/courseinfohelpers';
import SideNavbar from '../../../components/SideNavbar';
import styles from '../../../styles/ExploreHome.module.css';
import {
  H3, B1,
} from '../../../components/ui/typography';

export default function CourseInfo() {
  const data = CourseData();
  const router = useRouter();
  const { dept, num } = router.query;

  const courseCode = `${dept} ${num}`;
  const currentCourse = data[courseCode];

  return (
    <div className={styles.container}>

      <Head>
        <title>Classy</title>
        <meta name="description" content="class selection made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />
      <main>
        <CourseInfoTitle course={currentCourse || { dept, num }} />

        <H3>Description</H3>
        <B1>{currentCourse ? currentCourse.description : ''}</B1>

        <H3>At a Glance</H3>
        <Glance
          distribs={currentCourse ? currentCourse.distribs : ''}
          wc={currentCourse ? currentCourse.wc : ''}
          avgMedian={currentCourse ? convertMedian(currentCourse.avgMedian) : ''}
          waitlist={currentCourse ? currentCourse.waitlist : 'Unknown'}
          dept={currentCourse ? currentCourse.dept : ''}
          num={currentCourse ? currentCourse.num : ''}
        />

        <H3>Prerequisites</H3>
        {currentCourse ? getPrereqs(currentCourse.required, currentCourse.counts) : ''}

        <H3>What Students Say</H3>
        <StudentsSay
          workload={currentCourse ? currentCourse.workload : 'Unknown'}
          difficulty={currentCourse ? currentCourse.difficulty : 'Unknown'}
          quality={currentCourse ? currentCourse.quality : 'Unknown'}
        />

        <H3>Offered</H3>
        {currentCourse ? <Offered course={currentCourse} /> : <B1>No Data</B1>}

        <H3>Medians</H3>
        {currentCourse ? <Medians medians={currentCourse.medians} /> : <B1>No Data</B1>}
        {/* <h2 className={styles.title}>Reviews</h2> */}
      </main>
    </div>
  );
}
