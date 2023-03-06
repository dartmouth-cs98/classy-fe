import React from 'react';
import {
  H1, B1, TextLabel,
} from '../ui/typography';
import styles from '../../styles/components/ProfessorCard.module.css';
import { defaultUserImageURL } from '../../constants/mockData';

function ProfessorCard(props) {
  const { name, departments, profileImageUrl } = props;

  return (
    <div className={styles.container}>
      <img
        className={styles.pic}
        src={profileImageUrl || defaultUserImageURL}
        alt="Profile"
      />
      <div className={styles.wordSection}>
        <TextLabel color="var(--darkest-grey)">Professor</TextLabel>
        <H1 style={{ margin: '0px' }}>{name}</H1>
        <B1>{departments ? `${departments.join(', ')}` : ''}</B1>
      </div>
    </div>
  );
}

export default ProfessorCard;
