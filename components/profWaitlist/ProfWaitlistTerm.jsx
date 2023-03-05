import React, { useState } from 'react';
import {
  MdOutlineMailOutline,
  MdOutlineModeEditOutline,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from 'react-icons/md';
import {
  H3, H5,
} from '../ui/typography';
// eslint-disable-next-line import/no-unresolved
// import Pagination from '../Pagination';
import styles from '../../styles/components/ProfWaitlistTerm.module.css';
import ProfWaitlistTable from './ProfWaitlistTable';

function ProfWaitlistTerm(props) {
  const {
    color, i, offering, courseId, dept, num,
  } = props;

  const [selected, setSelected] = useState(null);
  // eslint-disable-next-line consistent-return, no-shadow
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.colorCard} style={{ background: color.pastel }}>
          <div className={styles.left}>
            <H3 color={color.dark}>
              {`${offering.term} ${
                offering.period ? offering.period : 'TBD'
              }`}

            </H3>
          </div>

          <div className={styles.right}>
            {/* eslint-disable-next-line */}
						<button type="button" className={styles.btn}>
  <MdOutlineMailOutline className={styles.inline} size={20} />
						</button>
            {/* eslint-disable-next-line */}
						<button
  type="button"
  className={styles.btn}
  onClick={() => toggle(i)}
						>
  {selected === i ? (
    <MdOutlineExpandLess className={styles.inline} size={20} />
  ) : (
    <MdOutlineExpandMore className={styles.inline} size={20} />
  )}
						</button>
          </div>
        </div>
      </div>

      <div className={selected === i ? 'content show' : 'content '}>
        <ProfWaitlistTable
          courseId={courseId}
          offering={offering}
          i={i}
          dept={dept}
          num={num}
        />

        <div>
          <H5 className={styles.text}>
            {`${
              offering.waitlist.length + offering.priorityWaitlist.length
            } signups`}

          </H5>
        </div>
      </div>
    </div>
  );
}

export default ProfWaitlistTerm;
