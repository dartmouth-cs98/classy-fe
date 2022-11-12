/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import getColor from '../data/colorscheme';
import stylesCI from '../styles/CourseInfo.module.css';
import {
  TextLabel, A, B1,
} from './ui/typography';

function getProfessorLink(professors) {
  return professors.map((professor) => {
    const url = `/professors/${professor.replace(' ', '_')}`;
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
  const { term, professors } = props;
  return (
    <div className={stylesCI.tile} style={{ background: getColor('term', term) }}>
      <TextLabel>{term}</TextLabel>
      <TextLabel>{getProfessors(professors)}</TextLabel>
    </div>
  );
}

export default OfferedTile;
