/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/Department.module.css';
import { H2, H3 } from './ui/typography';

function DepartmentCard(props) {
  const { color, dept } = props;
  return (
    <Link href={`/departments/${dept.codes[0]}`}>
      <div className={styles.card} style={{ background: color.pastel }}>
        <H3 className={styles.name} style={{ margin: '0px' }} color={color.dark}>{dept.name ? dept.name : ''}</H3>
        <H3 className={styles.abbr} style={{ margin: '0px' }} color={color.dark}>{dept.codes ? dept.codes.join(', ') : ''}</H3>
      </div>
    </Link>
  );
}

export default DepartmentCard;
