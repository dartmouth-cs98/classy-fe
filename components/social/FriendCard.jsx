/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  H3, B1, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/social/FriendCard.module.css';

function FriendCard(props) {
  const { student } = props;
  return (
    <Link href={`/social/friendProfile/${student._id}`}>
      <div className={styles.container}>
        {console.log('student:::', student)}
        <img className={styles.pic} src={student.profileImageUrl} alt="friend pic" />
        <div className={styles.description}>
          <H3 style={{ margin: '0px' }}>{`${student.firstName} ${student.lastName} '${student.studentObj[0].classYear}`}</H3>
          <div className="majorMinorContainer">
            {student?.majors?.map((major, i) => (
              <B1>{i + 1 === student.studentObj[0].majors.length ? `${major.name} Major` : `${major.name} Major • `}</B1>
            ))}
          </div>
          <div className="majorMinorContainer">
            {student?.minors?.map((minor, i) => (
              <B1>{i + 1 === student.studentObj[0].minors.length ? `${minor.name} Minor` : `${minor.name} Minor • `}</B1>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FriendCard;
