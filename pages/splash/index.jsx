import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthProvider } from './AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import { H1, H2, H3 } from '../../components/ui/typography';
import styles from '../../styles/Onboarding.module.css';
import prof from '../../images/professor_outlined.png';
import student from '../../images/student_outlined.png';

export default function splash() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <H1 color="white"> Ready to explore with Classy? </H1>
      </div>
      <div className={styles.onboardingSection}>
        <H2 color="white"> Sign up today</H2>
        <div className={styles.buttonContainer}>
          <Link href="/prof_register" className={styles.imgBtn}>
            <Image src={prof} width={300} height={300} alt="classy logo" />
          </Link>
          <Link href="/register" className={styles.imgBtn}>
            <Image src={student} width={300} height={300} alt="classy logo" />
          </Link>
        </div>
        <Link href="/login">
          <H3 color="white">Returning? Sign In</H3>
        </Link>
      </div>
    </div>
  );
}
