import React from 'react';
import stylesCI from '../styles/CourseInfo.module.css';
import CourseInfoTile from './Tile';

function StudentsSay(props) {
  const { workload, difficulty, quality } = props;
  return (
    <div className={[stylesCI.glance]}>
      <CourseInfoTile title="Workload" val={workload} />
      <CourseInfoTile title="Difficulty" val={difficulty} />
      <CourseInfoTile title="Quality" val={quality} />
    </div>
  );
}

export default StudentsSay;
