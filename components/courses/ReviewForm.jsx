import React from 'react';
import { useDispatch } from 'react-redux';
import FormSlider from './FormSlider';
import SelectInput from './SelectInput';
import styles from '../../styles/CourseInfo.module.css';
import { H4 } from '../ui/typography';
import { createCourseReview } from '../../actions';

function ReviewForm(props) {
  const { offerings } = props;
  const dispatch = useDispatch();
  let workload = 0; let difficulty = 5; let quality = 5;
  let content = ''; let offering = offerings && offerings[0] ? `${offerings[0].term}-${offerings[0].professors.join(',')}` : '';
  const onInputChange = (event) => {
    console.log(event.target.id, event.target.value);
    const eventId = event.target.id;
    if (eventId === 'workload') {
      workload = event.target.value;
    } else if (eventId === 'difficulty') {
      difficulty = event.target.value;
    } else if (eventId === 'quality') {
      quality = event.target.value;
    } else if (eventId === 'Offering') {
      offering = event.target.value;
    } else if (eventId === 'content') {
      content = event.target.value;
    } else {
      console.log('Not sure what you meant with that input');
    }
  };

  const onSubmit = () => {
    const splitOffering = offering.split('-');
    const term = splitOffering[0];
    const professors = splitOffering[1].split(',');
    const review = {
      workload, difficulty, quality, content, term, professors,
    };
    dispatch(createCourseReview(review));
  };

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className={styles.reviewform}>
        <FormSlider key="w" data="workload" title="Workload (hrs/week)" type="number" min="1" max="25" onInputChange={onInputChange} />
        <FormSlider key="d" data="difficulty" title="Difficulty (easiest to hardest)" type="range" min="1" max="5" onInputChange={onInputChange} />
        <FormSlider key="q" data="quality" title="Quality (worst to best)" type="range" min="1" max="5" onInputChange={onInputChange} />
      </div>
      <SelectInput name="Offering" options={offerings} onInputChange={onInputChange} />
      <H4>Review</H4>
      <input key="r" id="content" required type="textarea" className={styles.textarea} onChange={onInputChange} />

      <div>
        <button className={styles.button} type="submit">Submit Review</button>
      </div>
    </form>

  );
}

export default ReviewForm;
