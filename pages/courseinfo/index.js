/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import CourseData from '../../data/data';
import Glance from '../../components/Glance';
import CourseInfoTitle from '../../components/CourseInfoTitle';
import Offered from '../../components/Offered';
import Medians, { convertMedian } from '../../components/Medians';
import StudentsSay from '../../components/StudentsSay';
// import SideNavbar from '../../components/SideNavbar';

import {
  H3, B1,
} from '../../components/ui/typography';

export default function CourseInfo() {
  const data = CourseData();
  const currentCourse = data['COSC 52'];
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="class selection made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <SideNavbar /> */}
      <CourseInfoTitle course={currentCourse} />

      <H3>Description</H3>
      <B1>{currentCourse.description}</B1>

      <H3>At a Glance</H3>
      <Glance
        distribs={currentCourse.distribs}
        wc={currentCourse.wc}
        avgMedian={convertMedian(currentCourse.avgMedian)}
        waitlist={currentCourse.waitlist}
      />

      <H3>Prerequisites</H3>
      <B1>{currentCourse.prereqs.length > 0 ? currentCourse.prereqs : 'None'}</B1>

      <H3>What Students Say</H3>
      <StudentsSay
        workload={currentCourse.workload}
        difficulty={currentCourse.difficulty}
        quality={currentCourse.quality}
      />

      <H3>Offered</H3>
      <Offered course={currentCourse} />

      <H3>Medians</H3>
      <Medians medians={currentCourse.medians} />
      {/* <h2 className={styles.title}>Reviews</h2> */}
    </div>
  );
}
