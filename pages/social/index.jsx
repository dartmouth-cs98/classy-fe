import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/search/SearchBar';
import styles from '../../styles/Social.module.css';
import CourseTitleCard from '../../components/CourseTitleCard';
import { cardColors } from '../../constants/colors';
import { professorInfoMockData } from '../../constants/mockData';
import {
  H3,
} from '../../components/ui/typography';
import FriendCard from '../../components/social/FriendCard';
import BlackButton from '../../components/BlackButton';
import { fetchFriends } from '../../actions';

function Social() {
  const [seeAllFriends, setSeeAllFriends] = useState(false);
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.student.friends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends(user.user.student._id));
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
        <SearchBar />
        <div style={{ marginTop: '15px' }}>
          <H3>Your Friends Recommend</H3>
        </div>
        <div className={styles.coursesContainer}>
          {professorInfoMockData.featuredCourses.map((course, i) => (
            <div style={{ margin: '10px' }}>
              <CourseTitleCard
                course={course}
                color={cardColors[i % cardColors.length]}
                key={course.courseName}
              />
            </div>
          ))}
        </div>
        <H3>All Friends</H3>
        {friends ? friends.map((friend, i) => (
          i < 6 || seeAllFriends ? <FriendCard student={friend} /> : null)) : null}
        <BlackButton title={!seeAllFriends ? 'Show All Friends' : 'Hide Friends'} onClickFunction={showAllFriends} />
      </div>
    </div>
  );
}

export default Social;
