import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSignal5, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/CourseInfo.module.css';
import { H4, B1 } from '../ui/typography';

function ReviewComponent(props) {
  const {
    user, term, professors, review,
  } = props;

  const stars = (n) => [...Array(n)].map((e) => <FontAwesomeIcon key={`star${e}`} icon={faStar} />);
  return (
    <div className={styles.reviewContainer}>
      <div>
        <H4>{`${term} ${professors}`}</H4>
      </div>

      <div className={styles.reviewRow}>
        <div className={styles.reviewComp}>
          <FontAwesomeIcon icon={faClock} />
          <B1>{` ${review.workload} hrs/week `}</B1>
        </div>
        <div className={styles.reviewComp}>
          <FontAwesomeIcon icon={faSignal5} />
          <B1>{` ${review.difficulty}/5`}</B1>
        </div>
        <div className={styles.reviewComp}>{stars(review.quality)}</div>
      </div>
      <B1>{review.content}</B1>
      <br />
      <B1>
        {`${user.firstName} ${user.lastName}`}
      </B1>
    </div>
  );
}

export default ReviewComponent;
