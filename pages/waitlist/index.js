/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/WaitlistHome.module.css';
import SideNavbar from '../../components/SideNavbar';
import {
  H1, H2, H4, H3, B1,
} from '../../components/ui/typography';

const cardColor = ['#EBF9FA', '#EFFAEB', '#FCF0E3', '#EFE7FA', '#FAEBF6', '#F9F3FC'];
const textColor = ['#5B8A8D', '#75946A', '#BA7D37', '#7E5DAC', '#AE5E99', '#8E5BA8'];

export default function WaitlistHome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="Cool tagline here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />

      <H2 className={styles.title}>
        My Waitlists
      </H2>

      <main className={styles.main}>
        <B1 className="description">
          Join new waitlists from the course info page.
        </B1>

        <div className={styles.grid}>
          <a href="/waitlist/COSC/52" className={styles.card} style={{ background: cardColor[0] }}>
            <H2 color={textColor[0]}>COSC 52</H2>
            <H3 color={textColor[0]}>Full-Stack Web Development</H3>
          </a>

          <a href="/waitlist/COSC/74" className={styles.card} style={{ background: cardColor[1] }}>
            <H2 color={textColor[1]}>COSC 74</H2>
            <H3 color={textColor[1]}>Machine Learning and Statistical Data Analysis</H3>
          </a>

          <a href="/waitlist/COSC/25.01" className={styles.card} style={{ background: cardColor[2] }}>
            <H2 color={textColor[2]}>COSC 25.01</H2>
            <H3 color={textColor[2]}>Intro to UI/UX Design I</H3>
          </a>

          <a href="/waitlist/ECON/001" className={styles.card} style={{ background: cardColor[3] }}>
            <H2 color={textColor[3]}>ECON 001</H2>
            <H3 color={textColor[3]}>The Price System: Analysis, Problems, and Policies</H3>
          </a>

          <a href="/waitlist/MATH/001" className={styles.card} style={{ background: cardColor[4] }}>
            <H2 color={textColor[4]}>MATH 001</H2>
            <H3 color={textColor[4]}>Introduction to Calculus</H3>
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
