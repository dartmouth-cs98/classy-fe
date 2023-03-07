/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styles from '../../styles/Social.module.css';
import CourseTitleCard from '../../components/CourseTitleCard';
import { cardColors } from '../../constants/colors';
import {
  H3, B1,
} from '../../components/ui/typography';
import FriendCard from '../../components/social/FriendCard';
import BlackButton from '../../components/BlackButton';
import { fetchStudent } from '../../actions';
import { defaultImageURLs } from '../../constants/mockData';
import CourseSimple from '../../components/profWaitlist/CourseSimple';

function Social() {
  const [seeAllFriends, setSeeAllFriends] = useState(false);
  const user = useSelector((state) => state.user);
  const { student } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudent(user?.user?.student?._id));
  }, []);

  const showAllFriends = () => {
    if (seeAllFriends) {
      setSeeAllFriends(false);
    } else {
      setSeeAllFriends(true);
    }
  };

  const displayEmptyFriends = () => (
    <div className={styles.marginBottom}>
      <img className={styles.emptyStatePic} src={defaultImageURLs.friends} alt="No friends default image" />
      <B1 style={{ marginTop: '10px' }}>You have no friends yet. Request Some!</B1>
    </div>
  );

  const displayEmptyCourseRec = () => (
    <div className={styles.marginBottom}>
      <img className={styles.emptyStatePic} src={defaultImageURLs.onlineLearning} alt="No friends default image" />
      <B1 style={{ marginTop: '10px' }}>You do not have any course recommendation yet</B1>
    </div>
  );

  const displayFriendsCards = () => (
    student?.friends?.map((friend, i) => (i < 6 || seeAllFriends ? (
      <Link href={`/social/friendProfile/${friend._id}`}>
        <FriendCard student={friend} />
      </Link>
    ) : (
      // displayEmptyFriends()
      null
    )))
  );

  return (
    <div className={styles.container}>
      <div>
        <div style={{ marginTop: '15px' }}>
          <H3>Your Friends Recommend</H3>
        </div>
        <div className={styles.coursesContainer}>
          {student?.coursesRecommended?.length > 0
            ? student.coursesRecommended.map((course, i) => (
              <div style={{ margin: '10px' }}>
                <CourseSimple
                  key={course?.courseTitle}
                  course={course.course}
                  color={cardColors[i % cardColors.length]}
                  type="social"
                  friend={course.friend}
                />
              </div>
            ))
            : displayEmptyCourseRec()}
        </div>
        <H3>All Friends</H3>
        {student?.friends?.length > 0 ? displayFriendsCards() : displayEmptyFriends()}
        {student?.friends?.length > 0 ? (
          <BlackButton
            title={!seeAllFriends ? 'Show All Friends' : 'Hide Friends'}
            onClickFunction={showAllFriends}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Social;
