import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthProvider } from './AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import { H1, H2, H3 } from '../../components/ui/typography';
import styles from '../../styles/Onboarding.module.css';
import prof from '../../images/professor_outlined.png';
import student from '../../images/student_outlined.png';
import tileOne from '../../images/introTileOne.png';
import tileTwo from '../../images/tileTwo.png';

export default function Onboarding() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <H1 color="white"> Ready to explore with Classy? </H1>
      </div>
      <div className={styles.scrollcontainer}>
        <div className={styles.gridscroll}>
          <Image src={tileOne} width={500} height={500} alt="classy logo" />
          <Image src={tileTwo} width={500} height={500} alt="classy logo" />
        </div>
      </div>
      <div className={styles.onboardingSection}>
        <H2 color="white"> Sign up today</H2>
        <div className={styles.buttonContainer}>
          <Link href="/Register" className={styles.imgBtn}>
            <Image src={prof} width={300} height={300} alt="classy logo" />
          </Link>
          <Link href="/Register" className={styles.imgBtn}>
            <Image src={student} width={300} height={300} alt="classy logo" />
          </Link>
        </div>
        <Link href="/Login">
          <H3 color="white">Returning? Sign In</H3>
        </Link>
      </div>
    </div>
  );
}
