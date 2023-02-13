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
    color, i,
  } = props;

  const [selected, setSelected] = useState(null);

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
            <H3 color={color.dark}>22F</H3>
          </div>

          <div className={styles.right}>
            {/* eslint-disable-next-line */}
            <button type="button" className={styles.btn}><MdOutlineModeEditOutline className={styles.inline} size={20} /></button>
            {/* eslint-disable-next-line */}
            <button type="button" className={styles.btn}><MdOutlineMailOutline className={styles.inline} size={20} /></button>
            {/* eslint-disable-next-line */}
            <button type="button" className={styles.btn} onClick={() => toggle(i)}>
              {selected === i ? <MdOutlineExpandLess className={styles.inline} size={20} />
                : <MdOutlineExpandMore className={styles.inline} size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className={selected === i ? 'content show' : 'content '}>
        <ProfWaitlistTable />

        <div>
          {/* !!! 2 should be replaced with data */}
          <H5 className={styles.text}>viewing 2/25 signups</H5>
        </div>

        {/* <Pagination /> */}
        <div className={styles.pagination}>
          {/* eslint-disable-next-line */}
          <button type="button" className={styles.btn}><MdOutlineChevronLeft /></button>
          <ul className={styles.pagenum}>
            <button type="button" className={styles.btn}><li>1</li></button>
            <button type="button" className={styles.btn}><li>2</li></button>
            <button type="button" className={styles.btn}><li>3</li></button>
            <button type="button" className={styles.btn}><li>4</li></button>
            <button type="button" className={styles.btn}><li>5</li></button>
          </ul>
          {/* eslint-disable-next-line */}
          <button type="button" className={styles.btn}><MdOutlineChevronRight /></button>
        </div>

      </div>

    </div>
  );
}

export default ProfWaitlistTerm;
