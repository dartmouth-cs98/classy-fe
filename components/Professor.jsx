/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/ProfessorCard.module.css';
import { H4, B1 } from './ui/typography';
import { defaultUserImageURL } from '../constants/mockData';

function Professor(props) {
  const { professor } = props;
  const { pic, name, departments } = professor;
  return (
    <Link href={`/professors/${name}`}>
      <div className={styles.card}>
        <img
          className={styles.pic}
          style={{ marginBottom: 5 }}
          src={professor?.professorObj && professor?.professorObj[0].profileImageUrl?.length > 0
            ? professor?.professorObj[0].profileImageUrl : defaultUserImageURL}
          alt="friend pic"
        />
        <H4 style={{ margin: '0px' }} className={styles.name}>{name}</H4>
        <B1 className={styles.description} color="var(--dark-grey)">{departments.join(', ')}</B1>
      </div>
    </Link>
  );
}

export default Professor;
