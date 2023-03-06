import React from 'react';
import Link from 'next/link';
import {
  H2, H5, B1, B3, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/CourseSimple.module.css';

function CourseSimple(props) {
  const {
    course, color, type, friend,
  } = props;
  const distribsWC = course.wc ? course.distribs.concat(course.wc) : course.distribs;
  const loadLink = () => {
    if (type === 'prof') {
      return `/prof_waitlist/${course.courseDept}/${course.courseNum}`;
    }
    return `/courses/${course.courseDept}/${course.courseNum}`;
  };

  const loadDistribs = () => {
    if (distribsWC) {
      return distribsWC.map((distrib, i) => (
        <H5 key={distrib} color="var(--dark-grey)">
          {i + 1 === course.distribs.length ? distrib : `${distrib} • `}
        </H5>
      ));
    }
    return <TextLabel key="N/A" color="var(--dark-grey)" />;
  };

  return (
    <Link href={loadLink()}>
      <div className={styles.card}>
        <div className={styles.colorCard} style={{ background: color.pastel }}>
          <div className={styles.topLeft}>{loadDistribs()}</div>

          <div className={styles.qualityReview}>
            <H2 style={{ textAlign: 'right' }} color={color.dark}>
              {course.courseDept ? course.courseDept : '—'}
            </H2>
            <H2 style={{ textAlign: 'right' }} color={color.dark}>
              {course.courseNum ? course.courseNum : '—'}
            </H2>
          </div>
        </div>

        <div>
          <B1
            color={type === 'home' ? 'var(--white)' : 'var(--dark-grey)'}
            className={styles.description}
          >
            {course.courseTitle}
            {friend && friend.user ? (
              <div style={{ marginTop: '5px' }}>
                <B3
                  color="var(--dark-grey)"
                  className={styles.description}
                >
                  {`- ${friend.user.firstName} ${friend.user.lastName}`}

                </B3>
              </div>
            ) : null}
          </B1>
        </div>
      </div>
    </Link>
  );
}

export default CourseSimple;
