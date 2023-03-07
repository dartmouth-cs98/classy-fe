/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriend, updateStudent } from '../../../actions/index';
import styles from '../../../styles/Social.module.css';
import {
  B1, H1, H3,
} from '../../../components/ui/typography';
// import { studentId1 } from '../../../constants/mockData';
import { cardColors } from '../../../constants/colors';
import FriendRequestButton from '../../../components/social/friendRequestButton';
import CourseSimple from '../../../components/profWaitlist/CourseSimple';

export default function FriendProfile() {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const { friendStudentId } = router.query;
  const { friend } = useSelector((state) => state.student);
  const [friendState, setFriendState] = useState(
    user?.student?.friends.findIndex(
      (x) => x === friend._id,
    ) !== -1 ? 'friends'
      : user?.student?.outgoingFriendRequests.findIndex(
        (x) => x === friend._id,
      ) !== -1 ? 'requested' : 'request',
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriend(friendStudentId));
  }, []);

  const loadMajors = () => user?.student?.majors?.map((major, i) => (
    <B1>
      {i + 1 === user?.student?.majors.length
        ? `${major.name} Major` : `${major.name} Major • `}
    </B1>
  ));

  const loadMinors = () => user?.student?.minors?.map((minor, i) => (
    <B1>
      {i + 1 === user?.student?.minors.length
        ? `${minor.name} Major` : `${minor.name} Major • `}
    </B1>
  ));

  const requestFriend = () => {
    const outgoingFriendRequests = [...user?.student?.outgoingFriendRequests];
    const existingFriendRequest = user?.student?.outgoingFriendRequests.findIndex(
      (x) => x === friend._id,
    ) !== -1;
    if (!existingFriendRequest) {
      outgoingFriendRequests.push(friend._id);
      const incomingFriendRequests = [...friend.incomingFriendRequests];
      incomingFriendRequests.push(user.student._id);
      dispatch(updateStudent(user.student._id, { ...user.student, outgoingFriendRequests }));
      dispatch(updateStudent(friend._id, { ...friend, incomingFriendRequests }));
      setFriendState('requested');
    }
  };

  const loadShoppingCart = () => {
    if (friend && friend.shoppingCart) {
      return friend.shoppingCart.map((course, i) => (
        <div style={{ margin: '10px' }}>
          <CourseSimple
            key={course?.courseTitle}
            course={course}
            color={cardColors[i % cardColors.length]}
            type="friend"
          />
        </div>
      ));
    }
    return null;
  };

  return (
    <div className={styles.container}>
      {friend && friend.user ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: '35px',
          }}
        >
          <img
            className={styles.pic}
            src={friend?.user?.profileImageUrl}
            alt="profile Image"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FriendRequestButton
              state={friendState}
              onClickFunction={requestFriend}
            />
            <H1>{`${friend.user.firstName} ${friend.user.lastName}`}</H1>
            <div className="majorMinorContainer">{loadMajors()}</div>
            <div className="majorMinorContainer">
              {loadMinors()}
            </div>
          </div>
        </div>
      ) : null}
      <div style={{ marginTop: '15px' }}>
        <H3>Shopping Cart For Next Term</H3>
      </div>
      <div className={styles.coursesContainer}>
        {loadShoppingCart()}
      </div>
    </div>
  );
}
