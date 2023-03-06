import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthProvider } from './AuthProvider';
import Image from 'next/image';
import { H1, H3 } from '../../components/ui/typography';
import styles from '../../styles/HelpPage.module.css';
import section1 from '../../images/Frame (1).png';
import section2 from '../../images/Frame (2).png';
import section3 from '../../images/Frame (3).png';
import section4 from '../../images/Frame (4).png';
import section5 from '../../images/Frame (5).png';

// import { textColor } from '../../data/colors';
// text colors: 0 = blue, 1 = green, 2 = orange, 3 = purple, 4 = pink
export default function help() {
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <H1>Welcome to Classy</H1>
        <H3>Learn more about our features</H3>
      </div>
      <div className={styles.helpSection}>
        <div className={styles.img}>
          <Image src={section1} width={900} alt="classy logo" />
        </div>
        <div className={styles.img}>
          <Image src={section2} width={900} alt="classy logo" />
        </div>
        <div className={styles.img}>
          <Image src={section3} width={900} alt="classy logo" />
        </div>
        <div className={styles.img}>
          <Image src={section4} width={900} alt="classy logo" />
        </div>
        <div className={styles.img}>
          <Image src={section5} width={900} alt="classy logo" />
        </div>
      </div>
    </div>
  );
}
