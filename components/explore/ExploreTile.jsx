import React from 'react';
import { H3, B1 } from '../ui/typography';

export default function ExploreTile(props) {
  const {
    cardColor, textColor, courseDept, courseNum, courseTitle, index, professorName, professorDepts,
  } = props;
  const link = courseDept ? `/courses/${courseDept}/${courseNum}` : `/professors/${professorName}`;
  return (
    <a href={link} style={{ background: cardColor[index] }}>
      <H3 color={textColor[index]}>
        {courseDept ? `${courseDept} ${courseNum}` : professorName}
      </H3>
      <B1 color={textColor[index]}>{courseTitle || professorDepts.join('/')}</B1>
    </a>
  );
}
