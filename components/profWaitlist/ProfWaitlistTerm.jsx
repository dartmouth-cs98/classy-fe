import React, { useState } from 'react';
import {
  MdOutlineMailOutline,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from 'react-icons/md';
import {
  H3, H5,
} from '../ui/typography';

import styles from '../../styles/components/ProfWaitlistTerm.module.css';
import ProfWaitlistTable from './ProfWaitlistTable';

function ProfWaitlistTerm(props) {
  const {
    color, i, offering, courseId, dept, num,
  } = props;

  const [selected, setSelected] = useState(true);

  const mailBtn = (
    <button type="button" className={styles.btn}>
      <MdOutlineMailOutline className={styles.inline} size={20} />
    </button>
  );

  const collapseBtn = (
    <button type="button" className={styles.btn} onClick={() => setSelected(!selected)}>
      {selected ? (
        <MdOutlineExpandLess className={styles.inline} size={20} />
      ) : (
        <MdOutlineExpandMore className={styles.inline} size={20} />
      )}
    </button>
  );

  const signups = offering.waitlist.length + offering.priorityWaitlist.length;

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.colorCard} style={{ background: color.pastel }}>
          <div className={styles.left}>
            <H3 color={color.dark}>
              {`${offering.term} ${offering.period ? offering.period : 'TBD'}`}
            </H3>
          </div>

          <div className={styles.right}>
            {mailBtn}
            {collapseBtn}
          </div>
        </div>
      </div>

      <div style={{ display: `${selected ? 'block' : 'none'}` }}>
        {offering?.approved.length > 0 ? <H3>Approved</H3> : ''}
        <ProfWaitlistTable
          courseId={courseId}
          offering={offering}
          i={i}
          dept={dept}
          num={num}
          type="approved"
        />
        <br />
        <H3>Waitlist</H3>
        <ProfWaitlistTable
          courseId={courseId}
          offering={offering}
          i={i}
          dept={dept}
          num={num}
          type="waitlist"
        />

        <div>
          <H5 className={styles.text}>{`${signups} signups`}</H5>
        </div>
      </div>
    </div>
  );
}

export default ProfWaitlistTerm;
