/* eslint-disable react/prop-types */
import React from 'react';
import {
  B1,
} from '../ui/typography';
import styles from '../../styles/components/social/FriendRequestButton.module.css';
import { friendButtonColors } from '../../constants/colors';

function FriendRequestButton(props) {
  const { state, onClickFunction } = props;
  const color = friendButtonColors[state];
  return (
    <div className={styles.buttondiv}>
      <button type="button" className={styles.button} style={{ 'border-color': color }} onClick={() => onClickFunction(state)}>
        <B1 color={color}>{state}</B1>
      </button>
    </div>
  );
}

export default FriendRequestButton;
