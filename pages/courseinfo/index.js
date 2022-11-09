/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import stylesCI from '../../styles/CourseInfo.module.css';

import CourseData from './data';
import Glance from '../../components/Glance';
import CourseInfoTitle from '../../components/CourseInfoTitle';
import Offered from '../../components/Offered';
import Medians, { convertMedian } from '../../components/Medians';
import StudentsSay from '../../components/StudentsSay';

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

      <CourseInfoTitle course={currentCourse} />

      <h2 className={styles.title}>Description</h2>
      <div className={stylesCI.description}>{currentCourse.description}</div>

      <h2 className={styles.title}>At a Glance</h2>
      <Glance
        distribs={currentCourse.distribs}
        wc={currentCourse.wc}
        avgMedian={convertMedian(currentCourse.avgMedian)}
        waitlist={currentCourse.waitlist}
      />

      <h2 className={styles.title}>Prerequisites</h2>
      <div className={stylesCI.description}>{currentCourse.prereqs.length > 0 ? currentCourse.prereqs : 'None'}</div>

      <h2 className={styles.title}>What Students Say</h2>
      <StudentsSay
        workload={currentCourse.workload}
        difficulty={currentCourse.difficulty}
        quality={currentCourse.quality}
      />

      <h2 className={styles.title}>Offered</h2>
      <Offered course={currentCourse} />

      <h2 className={styles.title}>Medians</h2>
      <Medians medians={currentCourse.medians} />
      {/* <h2 className={styles.title}>Reviews</h2> */}
    </div>
  );
}
