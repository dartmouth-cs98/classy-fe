/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styles from '../../styles/Social.module.css';
import CourseTitleCard from '../../components/CourseTitleCard';
import { cardColors } from '../../constants/colors';
import {
  H3,
} from '../../components/ui/typography';
import FriendCard from '../../components/social/FriendCard';
import BlackButton from '../../components/BlackButton';
import { fetchStudent } from '../../actions';

function Social() {
  const [seeAllFriends, setSeeAllFriends] = useState(false);
  const user = useSelector((state) => state.user);
  const { student } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent(user.user.student._id));
  }, []);

  const showAllFriends = () => {
    if (seeAllFriends) {
      setSeeAllFriends(false);
    } else {
      setSeeAllFriends(true);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div style={{ marginTop: '15px' }}>
          <H3>Your Friends Recommend</H3>
        </div>
        <div className={styles.coursesContainer}>
          {student && student.coursesRecommended ? student.coursesRecommended.map((course, i) => (
            <div style={{ margin: '10px' }}>
              <CourseTitleCard
                course={course.course}
                color={cardColors[i % cardColors.length]}
                key={course.courseName}
                friend={course.friend}
              />
            </div>
          )) : null}
        </div>
        <H3>All Friends</H3>
        {student && student.friends ? student.friends.map((friend, i) => (
          i < 6 || seeAllFriends
            ? (
              <Link href={`/social/friendProfile/${friend._id}`}>
                <FriendCard student={friend} />
              </Link>
            ) : null)) : null}
        <BlackButton title={!seeAllFriends ? 'Show All Friends' : 'Hide Friends'} onClickFunction={showAllFriends} />
      </div>
    </div>
  );
}

export default Social;
