/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';
import styles from '../../styles/WaitlistHome.module.css';

export default function WaitlistHome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="Cool tagline here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className={styles.menu}>
        <h1>
          placeholder menu
        </h1>
      </div> */}

      <h1 className={styles.title}>
        My Waitlists
      </h1>

      <main className={styles.main}>
        <p className="description">
          Join new waitlists from the course info page.
        </p>

        <div className={styles.grid}>
          <a href="/waitlist/waitlist-detail" className={styles.card}>
            <h2>COSC 52</h2>
            <p>Full-Stack Web Development</p>
          </a>

          <a href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-25-01" className={styles.card}>
            <h2>COSC 25.01</h2>
            <p>Intro to UI/UX Design I</p>
          </a>

          <a href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Computer-Science/COSC-Computer-Science-Undergraduate/COSC-25-01" className={styles.card}>
            <h2>COSC 25.02</h2>
            <p>Intro to UI/UX Design II</p>
          </a>

          <a href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Economics/ECON-Economics/ECON-1" className={styles.card}>
            <h2>ECON 001</h2>
            <p>The Price System: Analysis, Problems, and Policies</p>
          </a>

          <a href="http://dartmouth.smartcatalogiq.com/current/orc/Departments-Programs-Undergraduate/Mathematics/MATH-Mathematics-Undergraduate/MATH-1" className={styles.card}>
            <h2>MATH 001</h2>
            <p>Introduction to Calculus</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="_blank"
          target="_blank"
          rel="noopener noreferrer"
        >
          Classy

        </a>
      </footer>
    </div>
  );
}
