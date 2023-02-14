/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import {
  H3, B1, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/social/FriendCard.module.css';

function FriendCard(props) {
  const { student } = props;
  return (
    <div className={styles.container}>
      <img className={styles.pic} src={student.profilePic} alt="friend pic" />
      <div className={styles.description}>
        <H3 style={{ margin: '0px' }}>{`${student.name} '${student.year}`}</H3>
        <div className="majorMinorContainer">
          {student.major.map((major, i) => (
            <B1>{i + 1 === student.major.length ? `${major} Major` : `${major} Major • `}</B1>
          ))}
        </div>
        <div className="majorMinorContainer">
          {student.minor.map((minor, i) => (
            <B1>{i + 1 === student.minor.length ? `${minor} Minor` : `${minor} Minor • `}</B1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
