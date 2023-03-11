/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
// import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import SideNavbar from '../components/SideNavbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';
import {
  H1, H2, H3,
} from '../components/ui/typography';
import styles from '../styles/Onboarding.module.css';
import prof from '../images/professor_outlined.png';
import student from '../images/student_outlined.png';
import logo from '../images/logo.png';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
// });

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image className={styles.logo} src={logo} width={120} height={120} alt="classy logo" />
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
          <H3 color="white">Returning? Login</H3>
        </Link>
      </div>
    </div>
  );
}
