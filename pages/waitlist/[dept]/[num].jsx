/* eslint-disable no-unneeded-ternary */
// import Link  from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import RemoveWaitlist from '../../../components/RemoveWaitlist';
import styles from '../../../styles/WaitlistDetail.module.css';
import CourseData from '../../../data/data';
import WaitlistData from '../../../data/waitlistdata';

export default function WaitlistDetail() {
  const data = CourseData();
  const router = useRouter();
  const { dept, num } = router.query;
  const courseCode = `${dept} ${num}`;
  const courseURL = `/courses/${dept}/${num}`;
  const currentCourse = data[courseCode];
  const waitlistData = WaitlistData();
  const waitlist = waitlistData[courseCode];
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="Cool tagline here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page_header}>
        <h1 className={styles.title}>
          My Waitlists
        </h1>
        <div className={styles.course_title}>
          <h1>
            {currentCourse ? currentCourse.dept : 'Placeholder Course'}
            {' '}
            {currentCourse ? currentCourse.num : ' '}
          </h1>
          <h3>{currentCourse ? currentCourse.courseTitle : 'This course has not been linked. Check back later!'}</h3>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.left_info}>
          <div className={styles.waitlist_btns}>
            <RemoveWaitlist />
            <a href={courseURL}>
              <button className={styles.button} type="button">
                Course Info Page
              </button>
            </a>
          </div>

          <div className={styles.waitlist_details_container}>
            <div className={styles.waitlist_element}>
              <h2>
                Estimated terms remaining:
                {' '}
                {waitlist ? waitlist.remaining_terms : 'N/A'}
                {' '}
                terms
              </h2>
            </div>
            <div className={styles.waitlist_element}>
              <div>
                <h2>
                  Average time spent on waitlist:
                  {' '}
                  {waitlist ? waitlist.avg_terms : 'N/A'}
                  {' '}
                  terms
                </h2>
              </div>
              <div>
                <h2>
                  Joined the waitlist:
                  {' '}
                  {waitlist ? waitlist.joined : 'N/A'}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right_info}>
          <div className={styles.waitlist_position}>
            <div className={styles.info_graphic}>
              <h1>
                {waitlist ? waitlist.waitlist_pos : 'N/A'}
                {' / '}
                {waitlist ? waitlist.waitlist_total : 'N/A'}
              </h1>
            </div>
            <p>waitlist position</p>
          </div>

          <div className={styles.prof_info_container}>
            <div className={styles.profile_picture}>
              photo
            </div>
            <h3>Tim Tregubov</h3>
            <button type="button" className={styles.small_btn}>
              Email
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="_blank"
          target="_blank"
          rel="noopener noreferrer"
        >
          Classy
        </a>
      </footer>
    </div>
  );
}