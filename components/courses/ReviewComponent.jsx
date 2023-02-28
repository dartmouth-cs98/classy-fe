import React from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from '@mui/icons-material/Speed';
import styles from '../../styles/CourseInfo.module.css';
import { H4, B1 } from '../ui/typography';

function ReviewComponent(props) {
  const {
    user, term, professors, review,
  } = props;

  // const stars = (n) => [...Array(n)].map((e) =>
  // <FontAwesomeIcon key={`star${e}`} icon={faStar} />);
  const stars = (n) => [...Array(n)].map(() => <span><StarIcon /></span>);
  return (
    <div className={styles.reviewContainer}>
      <div>
        <H4>{`${term} ${professors}`}</H4>
      </div>

      <div className={styles.reviewRow}>
        <div className={styles.reviewComp}>
          <AccessTimeOutlinedIcon />
          <B1>{` ${review.workload} hrs/week `}</B1>
        </div>
        <div className={styles.reviewComp}>
          <SpeedIcon />
          <B1>{` ${review.difficulty}/5`}</B1>
        </div>
        <div className={styles.reviewComp}>{stars(review.quality)}</div>
      </div>
      <B1>{review.content}</B1>
      <br />
      <B1>
        <i>{`${user.user.firstName} ${user.user.lastName}`}</i>
      </B1>
    </div>
  );
}

export default ReviewComponent;
