import React from 'react';
import { useDispatch } from 'react-redux';
import FormSlider from './FormSlider';
import SelectInput from './SelectInput';
import styles from '../../styles/CourseInfo.module.css';
import { H4 } from '../ui/typography';
import { createCourseReview } from '../../actions';

function ReviewForm(props) {
  const {
    courseId, offerings, users,
  } = props;
  const dispatch = useDispatch();
  let workload = 0; let difficulty = 5; let quality = 5; let content = '';
  // eslint-disable-next-line no-underscore-dangle
  let offering = offerings && offerings[0] ? `${offerings[0]._id}` : '';
  // eslint-disable-next-line no-underscore-dangle
  let user = users && users[0] ? `${users[0]._id}` : '';

  const onInputChange = (event) => {
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
    } else if (eventId === 'User') {
      user = event.target.value;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const review = {
      user,
      workload: parseInt(workload, 10),
      difficulty: parseInt(difficulty, 10),
      quality: parseInt(quality, 10),
      content,
    };
    content = '';
    dispatch(createCourseReview(courseId, offering, review));
  };

  return (
    <div className={styles.reviewContainer}>
      <form onSubmit={onSubmit}>
        <SelectInput name="User" options={users} onInputChange={onInputChange} />
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
    </div>
  );
}

export default ReviewForm;
