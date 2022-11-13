import React from 'react';
import Link from 'next/link';
import {
  H2, H5, B3, TextLabel,
} from './ui/typography';
// eslint-disable-next-line import/no-unresolved
import styles from '../styles/components/CourseTitleCard.module.css';

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

function CourseTitleCard(props) {
  const {
    course, color,
  } = props;
  // const {
  //   distribs, quality, reviews, id, name,
  // } = CourseTitleMockData;
  const courseNum = course.courseNumber.split(' ')[1];
  return (
    <Link href={`/courses/COSC/${courseNum}`}>
      <div className={styles.card}>
        <div className={styles.colorCard} style={{ background: color.pastel }}>
          {course.distribs.map((distrib, i) => (
            <TextLabel key={distrib} color="var(--dark-grey)">
              {i + 1 === course.distribs.length ? distrib : `${distrib} • `}
            </TextLabel>
          ))}
          <div className={styles.qualityReview}>
            <TextLabel color="var(--darkest-grey)">Quality</TextLabel>
            <H2 style={{ margin: '0px' }} color={color.dark}>{course.quality}</H2>
            <B3 color="var(--dark-grey)">
              {course.reviews.length}
              {' '}
              Reviews
            </B3>
          </div>
        </div>
        <div className="course-description">
          <H5 style={{ margin: '0px' }}>{course.courseNumber}</H5>
          <B3>{course.courseName}</B3>
        </div>
      </div>
    </Link>
  );
}

export default CourseTitleCard;
