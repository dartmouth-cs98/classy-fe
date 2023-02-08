import React from 'react';
import {
  MdOutlineMailOutline,
  MdOutlineModeEditOutline,
  MdOutlineExpandLess,
} from 'react-icons/md';
import {
  H3,
} from '../ui/typography';
// eslint-disable-next-line import/no-unresolved
import styles from '../../styles/components/ProfWaitlistTerm.module.css';

// const CourseTitleMockData = {
//   distribs: ['TLA', 'NW'],
//   quality: '3.5',
//   reviews: '5',
//   id: 'COSC52',
//   name: 'Full Stack Web Development',
// };

// const cardColors = {
//   pastelOrange: '#FCF0E3',
//   pastelBlue: '#EBF9FA',
//   pastelGreen: '#EFFAEB',
// };

function ProfWaitlistTerm(props) {
  const {
    color,
  } = props;
  return (
    <div className={styles.card}>
      <div className={styles.colorCard} style={{ background: color.pastel }}>

        <div className={styles.left}>
          <H3 color={color.dark}>22F</H3>
          {/* {distribsWC ? distribsWC.map((distrib, i) => (
              <H5 key={distrib} color={color.dark}>
                {i + 1 === course.distribs.length ? distrib : `${distrib} • `}
              </H5>
            )) : (
              <TextLabel key="N/A" color="var(--dark-grey)" />
            )} */}
        </div>

        <div className={styles.right}>
          <MdOutlineModeEditOutline className={styles.inline} size={20} />
          <MdOutlineMailOutline className={styles.inline} size={20} />
          <MdOutlineExpandLess className={styles.inline} size={20} />
        </div>

      </div>
    </div>
  );
}

export default ProfWaitlistTerm;
