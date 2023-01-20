/* eslint-disable no-underscore-dangle */
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
import { fetchWaitlist } from '../../../actions';

export default function WaitlistDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { dept, num } = router.query;
  useEffect(() => {
    dispatch(fetchWaitlist(dept, num));
  }, []);

  const currentWaitlist = useSelector((reduxState) => reduxState.waitlist.current);
  if (!currentWaitlist || !currentWaitlist.course
    || (currentWaitlist.course.courseDept !== dept || currentWaitlist.course.courseNum !== num)) {
    dispatch(fetchWaitlist(dept, num));
    return (
      <B1>Loading...</B1>
    );
  }

  const loadOfferings = () => currentWaitlist.course.offerings.map((offering) => {
    const studentObjectId = `ObjectId('${currentWaitlist.student._id}')`;
    let position = -1;
    if (offering.priorityWaitlist.includes(studentObjectId)) {
      position = 0;
    } else if (offering.waitlist.includes(studentObjectId)) {
      position = offering.priorityWaitlist.length + offering.waitlist.indexOf(studentObjectId) + 1;
    }
    const totalLength = offering.priorityWaitlist.length + offering.waitlist.length;
    // display position out of total if on a waitlist for the term,
    // otherwise just show waitlist length
    return (
      <tr key={offering.term}>
        <td>{offering.term}</td>
        <td>{offering.professors}</td>
        <td>{position === -1 ? totalLength : `${position}/${totalLength}`}</td>
        <td>
          {position === -1
            ? '-'
            : (
              <RemoveWaitlist
                dept={currentWaitlist.course.courseDept}
                num={currentWaitlist.course.courseNum}
                offering={offering}
              />
            )}

        </td>
      </tr>
    );
  });
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
          {`Waitlist ${currentWaitlist.onWaitlist ? 'Status' : 'Info'}
           for ${currentWaitlist.course.courseDept} ${currentWaitlist.course.courseNum}`}
        </H2>
      </div>

      <main className={styles.main}>
        <div className={styles.left_info}>
          <div className={styles.waitlist_btns}>
            {currentWaitlist.onWaitlist
              ? `Withdraw from All ${dept} ${num} Waitlists`
              : `Join ${dept} ${num} Waitlists`}
            <Link href={`/courses/${dept}/${num}`}>
              <button className={styles.button} type="button">
                Course Info Page
              </button>
            </Link>
          </div>

          <div className={styles.waitlist_details_container}>
            <table>
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Professor(s)</th>
                  <th># on Waitlist</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loadOfferings()}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
