/* eslint-disable no-unused-vars */
// import { makeStyles } from '@material-ui/core/styles';
// import RemoveWaitlist from './RemoveWaitlist';
import React from 'react';
// import { useState } from 'react';
import { TextField } from '@mui/material';
import {
  MdOutlineSettings,
} from 'react-icons/md';
import styles from '../styles/components/WaitlistTileCard.module.css';
import {
  H1, H2, H3, B1,
} from './ui/typography';

function parseTerms(courseTerms) {
  return courseTerms.join(', ');
}

function WaitlistCard(props) {
  const {
    color,
    course,
  } = props;
  const terms = parseTerms(course.terms);
  const courseURL = `/courses/${course.courseDepartment}/${course.courseNum}`;
  return (
    <div className={styles.card} style={{ background: color.pastel }}>
      <div className={styles.edit}>
        <a
          href=" "
        >
          <MdOutlineSettings className="text-2xl text-black group-hover:text-black" />
        </a>
      </div>
      <div className={styles.waitlistCardsContainer}>
        <div>
          <H3>
            {course.courseDepartment}
            {' '}
            {course.courseNum}
          </H3>
          <H3 color={color.dark}>
            {' '}
            {course.courseName}
          </H3>
        </div>
      </div>
      <div>
        <H3 color={color.dark}> position on 23s</H3>
        <H3>
          {course.waitlistPos}
          /
          {course.waitlistTotal}
        </H3>
      </div>
      <div>
        <H3 color={color.dark}> terms </H3>
        {terms}
      </div>
      <div>
        <H3 color={color.dark}> notes </H3>
        <TextField
          id="notes"
          defaultValue="Normal"
          variant="standard"
          color="secondary"
        />
      </div>
      <div className={styles.bottomButtons}>
        <div className={styles.buttonContainer}>
          <a href={courseURL}>
            <button className={styles.btn} type="button">
              Course Info Page
            </button>
          </a>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.btn} type="button">
            Remove
          </button>
        </div>
        {/* <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <RemoveWaitlist />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default WaitlistCard;
