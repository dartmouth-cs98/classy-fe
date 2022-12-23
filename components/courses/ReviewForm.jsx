import React from 'react';
import FormSlider from './FormSlider';
import SelectInput from './SelectInput';
import styles from '../../styles/CourseInfo.module.css';
import { H4 } from '../ui/typography';

function ReviewForm(props) {
  const { offerings } = props;
  let workload; let difficulty; let quality;
  const onInputChange = (event) => {
    console.log(event.target.id, event.target.value);
    const eventId = event.target.id;
    if (eventId === 'workload') {
      workload = event.target.value;
    } else if (eventId === 'difficulty') {
      difficulty = event.target.value;
    } else if (eventId === 'quality') {
      quality = event.target.value;
    } else {
      console.log('Not sure what you meant with that input');
    }
  };

  return (
    <form method="post">
      <div className={styles.reviewform}>
        <FormSlider key="w" data="workload" title="Workload (hrs/week)" type="number" min="1" max="25" onInputChange={onInputChange} />
        <FormSlider key="d" data="difficulty" title="Difficulty (easiest to hardest)" type="range" min="1" max="5" onInputChange={onInputChange} />
        <FormSlider key="q" data="quality" title="Quality (worst to best)" type="range" min="1" max="5" onInputChange={onInputChange} />
      </div>
      <SelectInput name="Professor" options={offerings} onInputChange={onInputChange} />
      <H4>Review</H4>
      <input type="textarea" className={styles.textarea} />

      <div>
        <button className={styles.button} type="submit">Submit Review</button>
      </div>
    </form>

  );
}

export default ReviewForm;
