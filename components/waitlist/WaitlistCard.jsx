import React from 'react';
import { H2, H3 } from '../ui/typography';
import styles from '../../styles/WaitlistHome.module.css';

export default function WaitlistCard(props) {
  const {
    textColor, cardColor, courseDept, courseNum, courseTitle, index,
  } = props;
  return (
    <a href={`/waitlist/${courseDept}/${courseNum}`} className={styles.card} style={{ background: cardColor[index] }}>
      <H2 color={textColor[index]}>
        {courseDept}
        {' '}
        {courseNum}
      </H2>
      <H3 color={textColor[index]}>{courseTitle}</H3>
    </a>
  );
}
