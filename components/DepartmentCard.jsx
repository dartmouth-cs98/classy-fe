/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/Department.module.css';
import { H2, H3 } from './ui/typography';

function DepartmentCard(props) {
  const { color, dept } = props;
  let fontSize;
  if (dept.codes.length === 2) {
    fontSize = '30px';
  }
  if (dept.codes.length === 3) {
    fontSize = '25px';
  }
  return (
    <Link href={`/search/${dept._id}`}>
      <div className={styles.card} style={{ background: color.pastel }}>
        <H3 className={styles.name} style={{ margin: '0px' }} color={color.dark}>{dept.name ? dept.name : ''}</H3>
        {dept.codes.length >= 2 ? <H2 className={styles.abbr} style={{ margin: '0px', fontSize }} color={color.dark}>{dept.codes ? dept.codes.join(', ') : ''}</H2>
          : <H2 className={styles.abbr} style={{ margin: '0px' }} color={color.dark}>{dept.codes ? dept.codes.join(', ') : ''}</H2>}

      </div>
    </Link>
  );
}

export default DepartmentCard;
