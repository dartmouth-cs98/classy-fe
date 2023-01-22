/* eslint-disable no-unused-vars */
// import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import styles from '../styles/components/WaitlistTileCard.module.css';
import RemoveWaitlist from './RemoveWaitlist';
import { H1, H2, H3 } from './ui/typography';

function WaitlistCard(props) {
  const {
    color,
    course,
  } = props;
  /* trying to get the background color of the text input field as the color.dark property */
  // const useStyles = makeStyles((theme) => ({
  //   input: {
  //     background: color.dark,
  //   },
  // }));
  const courseURL = `/courses/${course.courseDepartment}/${course.courseNum}`;
  return (
    <div className={styles.card} style={{ background: color.pastel }}>
      <div className={styles.waitlistCardsContainer}>
        <div>Edit</div>
        <div>
          <H2>
            {course.courseDepartment}
            {' '}
            {course.courseNum}
          </H2>
          <H2 color={color.dark}>
            {' '}
            {course.courseName}
          </H2>
        </div>
      </div>
      <div>
        <H3 color={color.dark}> position </H3>
        <H2>
          {course.waitlistPos}
          /
          {course.waitlistTotal}
        </H2>
      </div>
      <div>
        <H3 color={color.dark}> joined </H3>
        <H2>
          {course.joined}
        </H2>
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
            <button className={styles.button} type="button">
              Course Info Page
            </button>
          </a>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <RemoveWaitlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistCard;
