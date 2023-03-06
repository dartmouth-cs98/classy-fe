/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/WaitlistHome.module.css';
/* import SideNavbar from '../../components/SideNavbar'; */
import { H2, B1 } from '../../components/ui/typography';
import WaitlistModal from '../../components/waitlist/WaitlistModal';
import { fetchWaitlists } from '../../actions';

const displayEmptyWaitlist = () => (
  <div className={styles.marginBottom}>
    <img className={styles.emptyStatePic} src={defaultImageURLs.onlineLearning} alt="No waitlists image" />
    <B1 style={{ marginTop: '10px' }}>You do not have any waitlists</B1>
  </div>
);

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
        <div className={styles.grid}>
          {waitlistContent.courses ? waitlistContent.courses.map((course, index) => (
            <WaitlistModal
              course={course}
              studentId={waitlistContent.student._id}
              // ID={waitlistContent.student._id}
              onWaitlist
              // offering={course.offering}
              index={index}
              entryPoint="waitlist"
            />
          )) : displayEmptyWaitlist()}
        </div>
      </main>
    </div>
  );
}
