import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import RemoveWaitlist from '../../../components/waitlist/RemoveWaitlist';
import styles from '../../../styles/WaitlistDetail.module.css';
import SideNavbar from '../../../components/SideNavbar';
import {
  H2, B1,
} from '../../../components/ui/typography';
import { fetchCourse } from '../../../actions';

export default function WaitlistDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { dept, num } = router.query;
<<<<<<< HEAD
  useEffect(() => {
    dispatch(fetchCourse(dept, num));
  }, []);

  const currentCourse = useSelector((reduxState) => reduxState.courses.current);
  if (!currentCourse || (currentCourse.courseDept !== dept || currentCourse.courseNum !== num)) {
    dispatch(fetchCourse(dept, num));
    return (
      <B1>Loading...</B1>
    );
  }

  //   const waitlistData = WaitlistData();
  const waitlist = null;

  // const cardColor = ['#EBF9FA', '#EFFAEB', '#FCF0E3', '#EFE7FA', '#FAEBF6', '#F9F3FC'];
  // const textColor = ['#5B8A8D', '#75946A', '#BA7D37', '#7E5DAC', '#AE5E99', '#8E5BA8'];

=======
  const courseCode = `${dept} ${num}`;
  const courseURL = `/courses/${dept}/${num}`;
  const currentCourse = data[courseCode];
  const waitlistData = WaitlistData();
  const waitlist = waitlistData[courseCode];
  //   const cardColor = ['#EBF9FA', '#EFFAEB', '#FCF0E3', '#EFE7FA', '#FAEBF6', '#F9F3FC'];
  //   const textColor = ['#5B8A8D', '#75946A', '#BA7D37', '#7E5DAC', '#AE5E99', '#8E5BA8'];
>>>>>>> 41bb550 (connect fe to be)
  const profilePicture = 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6';
  const termCount = 4;
  const remaining = 3;
  const totalSpots = 100;
  const position = 10;
  const todayDate = new Date().toLocaleDateString();
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="Cool tagline here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />

      <div className={styles.page_header}>
        <H2 className={styles.title}>
          My Waitlists
        </H2>
        <div className={styles.course_title}>
          <h1>
            {currentCourse ? currentCourse.courseDept : 'Placeholder Course'}
            {' '}
            {currentCourse ? currentCourse.courseNum : ' '}
          </h1>
          <h3>{currentCourse ? currentCourse.courseTitle : 'This course has not been linked. Check back later!'}</h3>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.left_info}>
          <div className={styles.waitlist_btns}>
            <RemoveWaitlist />
            <Link href={`/courses/${dept}/${num}`}>
              <button className={styles.button} type="button">
                Course Info Page
              </button>
            </Link>
          </div>

          <div className={styles.waitlist_details_container}>
            <div className={styles.waitlist_element}>
              <h2>
                Estimated terms remaining:
                {' '}
                {waitlist ? waitlist.remaining_terms : remaining}
                {' '}
                term(s)
              </h2>
            </div>
            <div className={styles.waitlist_element}>
              <div>
                <h2>
                  Average time spent on waitlist:
                  {' '}
                  {waitlist ? waitlist.avg_terms : termCount}
                  {' '}
                  term(s)
                </h2>
              </div>
              <div>
                <h2>
                  Joined the waitlist:
                  {' '}
                  {waitlist ? waitlist.joined : todayDate}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right_info}>
          <div className={styles.waitlist_position}>
            <div className={styles.info_graphic}>
              <h1>
                {waitlist ? waitlist.waitlist_pos : position}
                {' / '}
                {waitlist ? waitlist.waitlist_total : totalSpots}
              </h1>
            </div>
            <p>waitlist position</p>
          </div>

          <div className={styles.prof_info_container}>
            <img className={styles.profile_picture} src={profilePicture} alt="Tim" />
            {/* <div className={styles.profile_picture}>
              photo
            </div> */}
            <h3>{currentCourse.offerings && currentCourse.offerings.length > 0 ? currentCourse.offerings[0].professors.join(', ') : ''}</h3>
            <button type="button" className={styles.small_btn}>
              Email
            </button>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="_blank"
          target="_blank"
          rel="noopener noreferrer"
        >
          Classy
        </a>
      </footer> */}
    </div>
  );
}
