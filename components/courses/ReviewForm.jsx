import React from 'react';
import FormSlider from './FormSlider';
import SelectInput from './SelectInput';
import styles from '../../styles/CourseInfo.module.css';
import { H4 } from '../ui/typography';

function ReviewForm(props) {
  const { offerings } = props;

  return (
    <form method="post">
      <div className={styles.reviewform}>
        <FormSlider key="w" title="Workload (hrs/week)" type="number" min="1" max="25" />
        <FormSlider key="d" title="Difficulty (easiest to hardest)" type="range" min="1" max="5" />
        <FormSlider key="q" title="Quality (worst to best)" type="range" min="1" max="5" />
      </div>
      <SelectInput name="Professor" options={offerings} />
      <H4>Review</H4>
      <input type="textarea" className={styles.textarea} />

      <div>
        <button className={styles.button} type="submit">Submit Review</button>
      </div>
    </form>

  );
}

export default ReviewForm;
