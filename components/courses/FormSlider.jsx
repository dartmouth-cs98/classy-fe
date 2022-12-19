import React from 'react';
import { H4, H5 } from '../ui/typography';
import styles from '../../styles/CourseInfo.module.css';

function FormSlider(props) {
  const {
    title, type, min, max,
  } = props;
  return (
    <>
      <H4>{title}</H4>
      <div className={styles.sliderLabels}>
        {type === 'range' ? <H5>{min}</H5> : ''}
        <input type={type} min={min} max={max} />
        {type === 'range' ? <H5>{max}</H5> : ''}
      </div>
    </>
  );
}

export default FormSlider;
