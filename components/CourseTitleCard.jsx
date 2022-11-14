import React from 'react';
import Link from 'next/link';
import {
  H1, H4, B1, B3, TextLabel,
} from './ui/typography';
// eslint-disable-next-line import/no-unresolved
import styles from '../styles/components/CourseProfessorCard.module.css';

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
          <div className={styles.distribs}>
            {course.distribs.map((distrib, i) => (
              <TextLabel key={distrib} color="var(--dark-grey)">
                {i + 1 === course.distribs.length ? distrib : `${distrib} • `}
              </TextLabel>
            ))}
          </div>
          <div className={styles.qualityReview}>
            <TextLabel color="var(--darkest-grey)" style={{ margin: '-13px' }}>Quality</TextLabel>
            <H1 color={color.dark}>{course.quality}</H1>
            <B3 style={{ margin: '-5px 0 -5px' }} color="var(--dark-grey)">
              {course.reviews.length}
              {' '}
              Reviews
            </B3>
          </div>
        </div>
        <div>
          <H4 className={styles.name} style={{ margin: '0px' }}>{course.courseNumber}</H4>
          <B1 className={styles.description}>{course.courseName}</B1>
        </div>

      </div>
    </Link>
  );
}

export default CourseTitleCard;
