/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/ProfessorCard.module.css';
import { H4, B1 } from './ui/typography';
import { defaultUserImageURL } from '../constants/mockData';

function Professor(props) {
  const { professor, forDept } = props;
  const { pic, name, departments } = professor;
  if (forDept) {
    return (
      <Link href={`/professors/${name}`}>
        <div className={styles.card}>
          <img
            className={styles.pic}
            style={{ marginBottom: 5 }}
            src={professor?.user.profileImageUrl?.length > 0
              ? professor.user.profileImageUrl : defaultUserImageURL}
            alt="friend pic"
          />
          <H4 style={{ margin: '0px' }} className={styles.name}>{name}</H4>
          <B1 className={styles.description} color="var(--dark-grey)">{departments.join(', ')}</B1>
        </div>
      </Link>
    );
  }
  return (
    <div>
      {professor.professorObj ? (
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
            <B1 className={styles.description} color="var(--dark-grey)">{departments?.join(', ')}</B1>
          </div>
        </Link>
      ) : (
        <Link href={`/professors/${name}`}>
          <div className={styles.card}>
            <img
              className={styles.pic}
              style={{ marginBottom: 5 }}
              src={professor?.user && professor?.user.profileImageUrl?.length > 0
                ? professor?.user.profileImageUrl : defaultUserImageURL}
              alt="friend pic"
            />
            <H4 style={{ margin: '0px' }} className={styles.name}>{name}</H4>
            <B1 className={styles.description} color="var(--dark-grey)">{departments?.join(', ')}</B1>
          </div>
        </Link>
      )}

    </div>
  );
}

export default Professor;
