/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import getColor from '../../data/colorscheme';
import stylesCI from '../../styles/CourseInfo.module.css';
import {
  TextLabel, A, B1,
} from '../ui/typography';

function getProfessorLink(professors) {
  return professors.map((professor) => {
    // const url = `/professors/${professor.replace(' ', '_')}`;
    const url = '/professorInfo';
    return (
      <Link href={url}>
        <A>
          <p>{professor}</p>
        </A>
      </Link>
    );
  });
}

function getProfessors(professor) {
  return (
    <B1>
      {getProfessorLink(professor)}
    </B1>
  );
}

function OfferedTile(props) {
  const { term, period, professors } = props;
  return (
    <div className={stylesCI.tile} style={{ background: getColor('term', term) }}>
      <TextLabel>
        {term}
        {' '}
        (
        {period}
        )
      </TextLabel>
      <TextLabel>{getProfessors(professors)}</TextLabel>
    </div>
  );
}

export default OfferedTile;
