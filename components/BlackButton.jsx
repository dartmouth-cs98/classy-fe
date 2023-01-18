/* eslint-disable react/prop-types */
import React from 'react';
import {
  B1,
} from './ui/typography';
import styles from '../styles/components/BlackButton.module.css';

function BlackButton(props) {
  const { title, onClickFunction, state } = props;
  return (
    <div className={styles.buttondiv}>
      <button type="button" className={styles.button} onClick={() => onClickFunction(state)}>
        <B1 color="white">{title}</B1>
      </button>
    </div>
  );
}

export default BlackButton;
