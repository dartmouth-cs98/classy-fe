/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  H3, B1, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/social/FriendCard.module.css';
import { defaultUserImageURL } from '../../constants/mockData';

function FriendCard(props) {
  const { student, forSearch } = props;

  const loadMajors = () => student?.majors?.map((major, i) => (
    <B1>
      {i + 1 === student.majors.length
        ? `${major.name} Major`
        : `${major.name} Major • `}
    </B1>
  ));

  const loadMinors = () => student?.minors?.map((minor, i) => (
    <B1>
      {i + 1 === student.minors.length
        ? `${minor.name} Minor`
        : `${minor.name} Minor • `}
    </B1>
  ));

  return (
    <div>
      {forSearch ? (
        <Link href={`/social/friendProfile/${student?.student}`}>
          <div>
            <img className={styles.pic} src={student?.profileImageUrl?.length > 0 ? student?.profileImageUrl : defaultUserImageURL} alt="friend pic" />
            <div className={styles.description}>
              <H3 style={{ margin: '0px' }}>{`${student.firstName} ${student.lastName} ${student.studentObj[0]?.classYear ? `'${student.studentObj[0]?.classYear}` : ''}`}</H3>
              <div className="majorMinorContainer">
                {student?.majors?.map((major, i) => (
                  <B1 key={major}>{i + 1 === student.studentObj[0].majors.length ? `${major.name} Major` : `${major.name} Major • `}</B1>
                ))}
              </div>
              <div className="majorMinorContainer">
                {student?.minors?.map((minor, i) => (
                  <B1 key={minor}>{i + 1 === student.studentObj[0].minors.length ? `${minor.name} Minor` : `${minor.name} Minor • `}</B1>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={`/social/friendProfile/${student._id}`}>
          <div className={styles.container}>
            <img className={styles.pic} src={student?.user?.profileImageUrl?.length > 0 ? student.user.profileImageUrl : defaultUserImageURL} alt="friend pic" />
            <div className={styles.description}>
              <H3 style={{ margin: '0px' }}>{`${student.user?.firstName} ${student.user.lastName} ${student?.classYear ? `'${student?.classYear}` : ''}`}</H3>
              <div className="majorMinorContainer">
                {loadMajors()}
              </div>
              <div className="majorMinorContainer">
                {loadMinors()}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default FriendCard;
