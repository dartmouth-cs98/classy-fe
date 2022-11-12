/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { MdOutlinePalette } from 'react-icons/md';
import styles from '../../styles/ExploreHome.module.css';
import SideNavbar from '../../components/SideNavbar';
import {
  H3, B1,
} from '../../components/ui/typography';

const cardColor = ['#EBF9FA', '#EFFAEB', '#FCF0E3', '#EFE7FA', '#FAEBF6', '#F9F3FC'];
const textColor = ['#5B8A8D', '#75946A', '#BA7D37', '#7E5DAC', '#AE5E99', '#8E5BA8'];
// const index = Math.floor(Math.random() * cardColor.length);
// const customcolor = cardColor[index];

export default function ExploreHome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="class selection made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />

      <H3 className={styles.title}>
        Most Searched Classes
      </H3>

      <main className={styles.main}>
        <div className={styles.horizscroll}>
          <a href="/waitlist/waitlist-detail" style={{ background: cardColor[0] }}>
            <H3 color={textColor[0]}> SART 15</H3>
            <B1 color={textColor[0]}>Drawing 1</B1>
            <MdOutlinePalette className="text-gray text-2xl" />
          </a>

          <a href="../courseinfo" style={{ background: cardColor[1] }}>
            <H3 color={textColor[1]}>COSC 25.01</H3>
            <B1 color={textColor[1]}>Intro to UI/UX Design I</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[2] }}>
            <H3 color={textColor[2]}>COSC 25.02</H3>
            <B1 color={textColor[2]}>Intro to UI/UX Design II</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[3] }}>
            <H3 color={textColor[3]}>MUS 051</H3>
            <B1 color={textColor[3]}>Oral Tradition Musicianship</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[4] }}>
            <H3 color={textColor[4]}>MATH 001</H3>
            <B1 color={textColor[4]}>Introduction to Calculus</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[5] }}>
            <H3 color={textColor[5]}>WGSS 010</H3>
            <B1 color={textColor[5]}>Sex, Gender, and Society</B1>
          </a>
        </div>
      </main>

      <H3 className={styles.title}>
        Most Searched Professors
      </H3>

      <main className={styles.main}>
        <div className={styles.horizscroll}>
          <a href="/waitlist/waitlist-detail" style={{ background: cardColor[3] }}>
            <H3 color={textColor[3]}>SART 15</H3>
            <B1 color={textColor[3]}>Drawing 1</B1>
            <MdOutlinePalette className="text-gray text-2xl" />
          </a>

          <a href="../courseinfo" style={{ background: cardColor[5] }}>
            <H3 color={textColor[5]}>COSC 25.01</H3>
            <B1 color={textColor[5]}>Intro to UI/UX Design I</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[2] }}>
            <H3 color={textColor[2]}>COSC 25.02</H3>
            <B1 color={textColor[2]}>Intro to UI/UX Design II</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[1] }}>
            <H3 color={textColor[1]}>MUS 051</H3>
            <B1 color={textColor[1]}>Oral Tradition Musicianship</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[0] }}>
            <H3 color={textColor[0]}>MATH 001</H3>
            <B1 color={textColor[0]}>Introduction to Calculus</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[4] }}>
            <H3 color={textColor[4]}>WGSS 010</H3>
            <B1 color={textColor[4]}>Sex, Gender, and Society</B1>
          </a>
        </div>
      </main>

      <div className={styles.buttondiv}>
        <a href="./explore/survey">
          <button type="button" className={styles.button}>
            <B1 color="white">Get a Recommendation!</B1>
          </button>
        </a>
      </div>

      <H3 className={styles.title}>
        23W Layups
      </H3>

      <main className={styles.main}>
        <div className={styles.horizscroll}>
          <a href="/waitlist/waitlist-detail" style={{ background: cardColor[0] }}>
            <H3 color={textColor[0]}>SART 15</H3>
            <B1 color={textColor[0]}>Drawing 1</B1>
            <MdOutlinePalette className="text-gray text-2xl" />
          </a>

          <a href="../courseinfo" style={{ background: cardColor[3] }}>
            <H3 color={textColor[3]}>COSC 25.01</H3>
            <B1 color={textColor[3]}>Intro to UI/UX Design I</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[1] }}>
            <H3 color={textColor[1]}>COSC 25.02</H3>
            <B1 color={textColor[1]}>Intro to UI/UX Design II</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[4] }}>
            <H3 color={textColor[4]}>MUS 051</H3>
            <B1 color={textColor[4]}>Oral Tradition Musicianship</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[5] }}>
            <H3 color={textColor[5]}>MATH 001</H3>
            <B1 color={textColor[5]}>Introduction to Calculus</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[2] }}>
            <H3 color={textColor[2]}>WGSS 010</H3>
            <B1 color={textColor[2]}>Sex, Gender, and Society</B1>
          </a>
        </div>
      </main>

    </div>
  );
}
