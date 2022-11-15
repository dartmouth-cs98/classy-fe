import React from 'react';
import { H3, H5 } from '../ui/typography';
import styles from '../../styles/WaitlistHome.module.css';

export default function ExploreTile(props) {
  const {
    cardColor, textColor, courseDept, courseNum, courseTitle, index, professorName, professorDepts,
  } = props;
  const link = courseDept ? `/courses/${courseDept}/${courseNum}` : `/professors/${professorName}`;
  return (
    <a href={link} className={styles.card} style={{ background: cardColor[index] }}>
      <H3 color={textColor[index]}>
        {courseDept ? `${courseDept} ${courseNum}` : professorName}
      </H3>
      <H5 color={textColor[index]}>{courseTitle || professorDepts.join('/')}</H5>
    </a>
  );
}
