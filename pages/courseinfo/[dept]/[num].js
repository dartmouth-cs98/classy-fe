/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

import CourseData from '../../../data/data';
import Glance from '../../../components/Glance';
import CourseInfoTitle from '../../../components/CourseInfoTitle';
import Offered from '../../../components/Offered';
import Medians, { convertMedian } from '../../../components/Medians';
import StudentsSay from '../../../components/StudentsSay';

// import SideNavbar from '../../components/SideNavbar';
import {
  H3, B1,
} from '../../../components/ui/typography';

function getPrereqs(prereqs, counts) {
  if (prereqs && prereqs.length > 0) {
    return prereqs.map((bucket, index) => (
      <li>
        <B1>
          {counts[index]}
          {' '}
          of
          {' '}
          {bucket.join(' or ')}
        </B1>

      </li>
    ));
  }
  return <B1>None</B1>;
}

export default function CourseInfo() {
  const data = CourseData();
  const router = useRouter();
  const { dept, num } = router.query;

  console.log();
  const courseCode = `${dept} ${num}`;
  const currentCourse = data[courseCode];
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
      {getPrereqs(currentCourse.required, currentCourse.counts)}

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
