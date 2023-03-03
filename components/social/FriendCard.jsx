/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import {
  H3, B1, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/social/FriendCard.module.css';
import { defaultUserImageURL } from '../../constants/mockData';

function FriendCard(props) {
  const { student } = props;
  return (
    <div className={styles.container}>
      <img className={styles.pic} src={student?.user?.profileImageUrl?.length > 0 ? student?.user?.profileImageUrl : defaultUserImageURL} alt="friend pic" />
      <div className={styles.description}>
        <H3 style={{ margin: '0px' }}>{`${student.user.firstName} ${student.user.lastName} '${student.classYear}`}</H3>
        <div className="majorMinorContainer">
          {student.majors.map((major, i) => (
            <B1>{i + 1 === student.majors.length ? `${major} Major` : `${major} Major • `}</B1>
          ))}
        </div>
        <div className="majorMinorContainer">
          {student.minors.map((minor, i) => (
            <B1>{i + 1 === student.minors.length ? `${minor} Minor` : `${minor} Minor • `}</B1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
