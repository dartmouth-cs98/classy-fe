/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/WaitlistHome.module.css';
/* import SideNavbar from '../../components/SideNavbar'; */
import { H2, B1 } from '../../components/ui/typography';
import WaitlistModal from '../../components/waitlist/WaitlistModal';
import { fetchWaitlists } from '../../actions';

export default function WaitlistHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWaitlists());
  }, []);
  const waitlistContent = useSelector((reduxState) => reduxState.waitlist.current);
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="Cool tagline here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <H2 className={styles.title}>
        My Waitlists
      </H2>

      <main className={styles.main}>
        <B1 className="description">
          Join new waitlists from the course info page.
        </B1>

        <div className={styles.grid}>
          {waitlistContent.courses ? waitlistContent.courses.map((course, index) => (
            <WaitlistModal
              course={course}
              studentId={`ObjectId('${waitlistContent.student._id}')`}
              onWaitlist
              index={index}
              entryPoint="waitlist"
            />
          )) : ''}
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
