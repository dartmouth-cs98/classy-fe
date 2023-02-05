import React, { useState } from 'react';
import SearchBar from '../../components/search/SearchBar';
import styles from '../../styles/Social.module.css';
import CourseTitleCard from '../../components/CourseTitleCard';
import { cardColors } from '../../constants/colors';
import { professorInfoMockData } from '../../constants/mockData';
import {
  H3
} from '../../components/ui/typography';

function Social() {
  return (
    <div className={styles.container}>
      <div>
        <SearchBar />
        <div>
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
      </div>
    </div>
  );
}

export default Social;
