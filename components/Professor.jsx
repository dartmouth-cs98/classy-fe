/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/ProfessorCard.module.css';
import { H4, B1 } from './ui/typography';

function Professor(props) {
  const { professor } = props;
  const { pic, name, department } = professor;
  return (
    <Link href="/professorInfo">
      <div className={styles.card}>
        <img className={styles.pic} style={{ marginBottom: 5 }} src={pic} alt="Tim" />
        <H4 style={{ margin: '0px' }} className={styles.name}>{name}</H4>
        <B1 className={styles.description} color="var(--dark-grey)">{department}</B1>
      </div>
    </Link>
  );
}

export default Professor;
