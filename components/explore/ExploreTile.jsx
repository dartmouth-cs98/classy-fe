import React from 'react';
import Link from 'next/link';
import { H3, H5 } from '../ui/typography';
import styles from '../../styles/WaitlistHome.module.css';
import { cardColor, textColor } from '../../data/colors';

export default function ExploreTile(props) {
  const {
    courseDept, courseNum, courseTitle, index, professorName, professorDepts,
  } = props;
  const link = courseDept ? `/courses/${courseDept}/${courseNum}` : `/professors/${professorName}`;
  return (
    <Link href={link}>
      <div className={styles.card} style={{ background: cardColor[index % cardColor.length] }}>
        <H3 color={textColor[index % textColor.length]}>
          {courseDept ? `${courseDept} ${courseNum}` : professorName}
        </H3>
        <H5 color={textColor[index % textColor.length]}>{courseTitle || (professorDepts ? professorDepts.join('/') : '')}</H5>
      </div>
    </Link>
  );
}
