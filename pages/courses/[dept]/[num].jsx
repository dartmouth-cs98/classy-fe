<<<<<<< HEAD
import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

=======
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
>>>>>>> b709cc1 (update links)
import CourseData from '../../../data/data';
import Glance from '../../../components/Glance';
import CourseInfoTitle from '../../../components/CourseInfoTitle';
import Offered from '../../../components/Offered';
import Medians, { convertMedian } from '../../../components/Medians';
import StudentsSay from '../../../components/StudentsSay';
<<<<<<< HEAD

// import { fetchCourse } from '../../../actions';
import getPrereqs from '../../../data/courseinfohelpers';
import SideNavbar from '../../../components/SideNavbar';

import {
  H3, B1,
} from '../../../components/ui/typography';

=======
import SideNavbar from '../../../components/SideNavbar';

import {
  H3, B1, A,
} from '../../../components/ui/typography';

function getPrereqLinks(bucket) {
  return bucket.map((element, index) => {
    const parsed = element.split(' ');
    const dept = parsed[0];
    const num = parsed[1];
    if (parseFloat(num) > 0) {
      const url = `/courses/${dept}/${num}`;
      if (index === 0) {
        return <Link href={url}><A>{element}</A></Link>;
      }
      return (
        <Link href={url}>
          <A>
            {' '}
            or
            {' '}
            {element}
          </A>
        </Link>
      );
    }
    return element;
  });
}

function getPrereqs(prereqs, counts) {
  if (prereqs && prereqs.length > 0) {
    return prereqs.map((bucket, index) => (
      <li>
        <B1>
          {counts[index]}
          {' '}
          of
          {' '}
          {getPrereqLinks(bucket)}
        </B1>

      </li>
    ));
  }
  return <B1>None</B1>;
}

>>>>>>> b709cc1 (update links)
export default function CourseInfo() {
  const data = CourseData();
  const router = useRouter();
  const { dept, num } = router.query;

  const courseCode = `${dept} ${num}`;
  const currentCourse = data[courseCode];
<<<<<<< HEAD

  return (
    <div className="container">

=======
  return (
    <div className={styles.container}>
>>>>>>> b709cc1 (update links)
      <Head>
        <title>Classy</title>
        <meta name="description" content="class selection made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />
<<<<<<< HEAD
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
=======
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
>>>>>>> b709cc1 (update links)
    </div>
  );
}
