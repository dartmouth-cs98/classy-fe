import React from 'react';
import Link from 'next/link';
import {
  H2, H5, B1, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/CourseSimple.module.css';

function CourseSimple(props) {
  const {
    course, color, type,
  } = props;
  const distribsWC = course.wc ? course.distribs.concat(course.wc) : course.distribs;
  const loadLink = () => {
    if (type === 'home') {
      return `/courses/${course.courseDept}/${course.courseNum}`;
    }
    return `/prof_waitlist/${course.courseDept}/${course.courseNum}`;
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
          <div className={styles.topLeft}>
            {loadDistribs()}
          </div>

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
          </B1>
        </div>
      </div>
    </Link>
  );
}

export default CourseSimple;
