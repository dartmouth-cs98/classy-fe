/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import SearchBar from '../../components/search/SearchBar';
import styles from '../../styles/Social.module.css';
import CourseTitleCard from '../../components/CourseTitleCard';
import { cardColors } from '../../constants/colors';
import { professorInfoMockData, friendsMockData } from '../../constants/mockData';
import {
  H3,
} from '../../components/ui/typography';
import FriendCard from '../../components/social/FriendCard';
import BlackButton from '../../components/BlackButton';

function Social() {
  const [seeAllFriends, setSeeAllFriends] = useState(false);

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
                key={course.courseName + i}
              />
            </div>
          ))}
        </div>
        <H3>All Friends</H3>
        {friendsMockData.friends.map((friend, i) => (
          i < 6 || seeAllFriends ? <FriendCard student={friend} /> : null))}
        <BlackButton title={!seeAllFriends ? 'Show All Friends' : 'Hide Friends'} onClickFunction={showAllFriends} />
      </div>
    </div>
  );
}

export default Social;
