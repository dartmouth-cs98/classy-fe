import React from 'react';
import Link from 'next/link';
import {
  H1, H4, B1, TextLabel,
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
          <div className={styles.topLeft}>
            <TextLabel color="var(--dark-grey)">
              {course.location}
            </TextLabel>
          </div>
          <H1 color={color.dark} style={{ marginBottom: '-13px' }}>{course.timeBlock}</H1>
        </div>
        <div>
          <H4 color="var(--white)" className={styles.name} style={{ margin: '0px' }}>{course.courseNumber}</H4>
          <B1 color="var(--lighter-grey)" className={styles.description}>{course.courseName}</B1>
        </div>

      </div>
    </Link>
  );
}

export default CourseTitleCard;
