import React from 'react';
import Head from 'next/head';
import styles from '../../styles/ExploreHome.module.css';
import SideNavbar from '../../components/SideNavbar';

export default function ExploreHome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="class selection made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />

      <h1 className={styles.title}>
        Most Searched Classes
      </h1>

      <main className={styles.main}>
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

      <h1 className={styles.title}>
        Most Searched Professors
      </h1>

      <main className={styles.main}>
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

      <button type="button" className={styles.button}>Get Recommendation!</button>

      <h1 className={styles.title}>
        23W Layups
      </h1>

      <main className={styles.main}>
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
