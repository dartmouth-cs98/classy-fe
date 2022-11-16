import React from 'react';
import Link from 'next/link';
import { H2, H4 } from '../ui/typography';
import styles from '../../styles/WaitlistHome.module.css';

export default function WaitlistCard(props) {
  const {
    textColor, cardColor, courseDept, courseNum, courseTitle, index,
  } = props;
  return (
    <Link href={`/waitlist/${courseDept}/${courseNum}`}>
      <div className={styles.card} style={{ background: cardColor[index] }}>
        <H2 color={textColor[index]}>
          {courseDept}
          {' '}
          {courseNum}
        </H2>
        <H4 color={textColor[index]}>{courseTitle}</H4>
      </div>
    </Link>
  );
}
