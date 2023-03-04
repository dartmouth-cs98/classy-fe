import React from 'react';
import Link from 'next/link';
import {
  H2, H4, H5, B1, TextLabel, H3,
} from '../ui/typography';
// eslint-disable-next-line import/no-unresolved
import styles from '../../styles/components/CourseSimple.module.css';

// const CourseTitleMockData = {
//   distribs: ['TLA', 'NW'],
//   quality: '3.5',
//   reviews: '5',
//   id: 'COSC52',
//   name: 'Full Stack Web Development',
// };

// const cardColors = {
//   pastelOrange: '#FCF0E3',
//   pastelBlue: '#EBF9FA',
//   pastelGreen: '#EFFAEB',
// };

function CourseSimple(props) {
  const {
    course, color, type,
  } = props;
  const distribsWC = course.wc ? course.distribs.concat(course.wc) : course.distribs;
  return (
    <Link href={type === 'home'
      ? `/courses/${course.courseDept}/${course.courseNum}`
      : `/prof_waitlist/${course.courseDept}/${course.courseNum}`}
    >
      <div className={styles.card}>
        <div className={styles.colorCard} style={{ background: color.pastel }}>

          <div className={styles.topLeft}>
            {distribsWC ? distribsWC.map((distrib, i) => (
              <H5 key={distrib} color="var(--dark-grey)">
                {i + 1 === course.distribs.length ? distrib : `${distrib} • `}
              </H5>
            )) : (
              <TextLabel key="N/A" color="var(--dark-grey)" />
            )}
          </div>

          <div className={styles.qualityReview}>
            <H2 style={{ textAlign: 'right' }} color={color.dark}>
              {course.courseDept
                ? `${course.courseDept} ${course.courseNum}`
                : '—'}
            </H2>
          </div>

        </div>

        <div>
          <B1 color={type === 'home' ? 'var(--white)' : 'var(--dark-grey)'} className={styles.description}>{course.courseTitle}</B1>
        </div>

      </div>
    </Link>
  );
}

export default CourseSimple;
