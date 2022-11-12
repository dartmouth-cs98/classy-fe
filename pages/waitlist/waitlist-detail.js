/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';
import RemoveWaitlist from '../../components/RemoveWaitlist';
import styles from '../../styles/WaitlistDetail.module.css';
import CourseData from '../../data/data';
import WaitlistData from '../../data/waitlistdata';
import { Link } from 'react-router-dom';

export default function WaitlistDetail() {
  const data = CourseData();
  const waitlistData = WaitlistData();
  const waitlist = waitlistData['COSC 52'];
  const currentCourse = data['COSC 52'];
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
            {currentCourse.course_code.course_dept}
            {' '}
            {currentCourse.course_code.course_number}
          </h1>
          <h3>{currentCourse.course_title}</h3>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.left_info}>
          <div className={styles.waitlist_btns}>
            <RemoveWaitlist />
            {/* <button type="button" className={styles.button}>Edit Waitlist Request</button> */}
            <a href="/courseinfo" className={styles.button}>Course Info Page</a>
            {/* <button type="button" className={styles.button}>Course Info Page</button> */}
          </div>

          <div className={styles.waitlist_details_container}>
            <div className={styles.waitlist_element}>
              <h2>
                Estimated terms remaining:
                {' '}
                {waitlist.remaining_terms}
                {' '}
                terms
              </h2>
            </div>
            <div className={styles.waitlist_element}>
              <div>
                <h2>
                  Average time spent on waitlist:
                  {' '}
                  {waitlist.avg_terms}
                  {' '}
                  terms
                </h2>
              </div>
              <div>
                <h2>
                  Joined the waitlist:
                  {' '}
                  {waitlist.joined}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right_info}>
          <div className={styles.waitlist_position}>
            <div className={styles.info_graphic}>
              <h1>
                {waitlist.waitlist_pos}
                {' / '}
                {waitlist.waitlist_total}
              </h1>
            </div>
            <p>waitlist position</p>
          </div>

          <div className={styles.prof_info_container}>
            <div className={styles.profile_picture}>
              photo
            </div>
            <h3>Professor Jane</h3>
            <button type="button" className={styles.button}>
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
