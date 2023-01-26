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
  H2, B1, H4, H3,
} from '../../../components/ui/typography';
import { addToOneWaitlist, fetchWaitlist } from '../../../actions';
import WaitlistForm from '../../../components/waitlist/WaitlistForm';

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
    console.log(offering);
    const totalLength = offering.priorityWaitlist.length + offering.waitlist.length;
    if (offering.priorityWaitlist.includes(studentObjectId)) {
      position = 'Priority';
    } else if (offering.waitlist.includes(studentObjectId)) {
      position = `${offering.priorityWaitlist.length + offering.waitlist.indexOf(studentObjectId) + 1}/${totalLength}`;
    }

    const positionDisplay = () => {
      if (position === -1) {
        if (currentWaitlist.onWaitlist) {
          return (
            <B1>
              <button
                className={styles.button}
                type="button"
                onClick={dispatch(addToOneWaitlist({
                  courseDept: dept,
                  courseNum: num,
                  studentId: studentObjectId,
                  term: offering.term,
                }))}
              >
                {`Join ${offering.term} Waitlist`}
              </button>
            </B1>
          );
        }
        return '-';
      }
      return (
        <RemoveWaitlist
          dept={currentWaitlist.course.courseDept}
          num={currentWaitlist.course.courseNum}
          offering={offering}
          studentId={`ObjectId('${currentWaitlist.student._id}')`}
        />
      );
    };

    // display position out of total if on a waitlist for the term,
    // otherwise just show waitlist length
    return (
      <tr key={offering.term}>
        <td><B1>{offering.term}</B1></td>
        <td><B1>{offering.professors.join(', ')}</B1></td>
        <td><B1>{position === -1 ? totalLength : position}</B1></td>
        <td>
          <B1>{positionDisplay()}</B1>
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
              ? (
                <RemoveWaitlist
                  dept={currentWaitlist.course.courseDept}
                  num={currentWaitlist.course.courseNum}
                  studentId={`ObjectId('${currentWaitlist.student._id}')`}
                />
              )
              : (
                <WaitlistForm
                  course={currentWaitlist.course}
                  studentId={`ObjectId('${currentWaitlist.student._id}')`}
                />
              )}
            <Link href={`/courses/${dept}/${num}`}>
              <H3>
                <button className={styles.button} type="button">
                  Course Info Page
                </button>
              </H3>
            </Link>
          </div>

          <div className={styles.waitlist_details_container}>
            <table>
              <thead>
                <tr>
                  <th><H4>Term</H4></th>
                  <th><H4>Professor(s)</H4></th>
                  <th><H4># on Waitlist</H4></th>
                  <th><H4>Action</H4></th>
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
