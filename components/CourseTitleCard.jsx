import React from 'react';
import Link from 'next/link';
import {
  H1, H4, B1, B3, TextLabel,
} from './ui/typography';
// eslint-disable-next-line import/no-unresolved
import styles from '../styles/components/CourseTitleCard.module.css';

function CourseTitleCard(props) {
  const {
    course, color,
  } = props;
  const distribsWC = course.wc ? course.distribs.concat(course.wc) : course.distribs;
  return (
    <Link href={`/courses/${course.courseDept}/${course.courseNum}`}>
      <div className={styles.card}>
        <div className={styles.colorCard} style={{ background: color.pastel }}>

          <div className={styles.topLeft}>
            {distribsWC ? distribsWC.map((distrib, i) => (
              <TextLabel key={distrib} color="var(--dark-grey)">
                {i + 1 === course.distribs.length ? distrib : `${distrib} • `}
              </TextLabel>
            )) : (
              <TextLabel key="N/A" color="var(--dark-grey)" />
            )}
          </div>

          <div className={styles.qualityReview}>
            <TextLabel color="var(--darkest-grey)" style={{ margin: '-11px' }}>Quality</TextLabel>
            <H1 color={color.dark}>
              {course.quality
                ? course.quality
                : '—'}

            </H1>
            <B3 style={{ margin: '-12px 0 -5px' }} color="var(--dark-grey)">
              {course.reviewCount ? course.reviewCount : 0}
              {' '}
              Reviews
            </B3>
          </div>

        </div>

        <div>
          <H4 className={styles.name} style={{ margin: '0px' }}>
            {course.courseDept}
            {' '}
            {course.courseNum}
          </H4>
          <B1 color="var(--dark-grey)" className={styles.description}>{course.courseTitle}</B1>
        </div>

      </div>
    </Link>
  );
}

export default CourseTitleCard;
