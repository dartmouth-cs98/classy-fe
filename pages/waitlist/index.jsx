import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/WaitlistHome.module.css';
import SideNavbar from '../../components/SideNavbar';
import { H2, B1 } from '../../components/ui/typography';
import WaitlistCard from '../../components/waitlist/WaitlistCard';
import { fetchWaitlist } from '../../actions';

const cardColor = ['#EBF9FA', '#EFFAEB', '#FCF0E3', '#EFE7FA', '#FAEBF6', '#F9F3FC'];
const textColor = ['#5B8A8D', '#75946A', '#BA7D37', '#7E5DAC', '#AE5E99', '#8E5BA8'];

export default function WaitlistHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWaitlist());
  }, []);
  const waitlistContent = useSelector((reduxState) => reduxState.waitlist.current);
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="Cool tagline here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />

      <H2 className={styles.title}>
        My Waitlists
      </H2>

      <main className={styles.main}>
        <B1 className="description">
          Join new waitlists from the course info page.
        </B1>

        <div className={styles.grid}>
          {waitlistContent.courses ? waitlistContent.courses.map((course, index) => (
            <WaitlistCard
              textColor={textColor}
              cardColor={cardColor}
              courseDept={course.courseDept}
              courseNum={course.courseNum}
              courseTitle={course.courseTitle}
              index={index}
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
