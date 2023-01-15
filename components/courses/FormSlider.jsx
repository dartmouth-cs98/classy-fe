import React from 'react';
import { H4, H5 } from '../ui/typography';
import styles from '../../styles/CourseInfo.module.css';

function FormSlider(props) {
  const {
    data, title, type, min, max, onInputChange,
  } = props;
  return (
    <>
      <H4>{title}</H4>
      <div className={styles.sliderLabels}>
        {type === 'range' ? <H5>{min}</H5> : ''}
        <input required type={type} min={min} max={max} id={data} onChange={onInputChange} />
        {type === 'range' ? <H5>{max}</H5> : ''}
      </div>
    </>
  );
}

export default FormSlider;
