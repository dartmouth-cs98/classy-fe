/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import styles from '../../styles/ExploreHome.module.css';
import SideNavbar from '../../components/SideNavbar';
import { H3, B1 } from '../../components/ui/typography';

const cardColor = [
  '#EBF9FA',
  '#EFFAEB',
  '#FCF0E3',
  '#EFE7FA',
  '#FAEBF6',
  '#F9F3FC',
];
const textColor = [
  '#5B8A8D',
  '#75946A',
  '#BA7D37',
  '#7E5DAC',
  '#AE5E99',
  '#8E5BA8',
];
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

      <H3 className={styles.title}>Most Searched Classes</H3>

      <main className={styles.main}>
        <div className={styles.horizscroll}>
          <a href="./courses/COSC/10" style={{ background: cardColor[0] }}>
            <H3 color={textColor[0]}>COSC 10</H3>
            <B1 color={textColor[0]}>Problem Solving via OOP</B1>
          </a>

          <a href="./courses/COSC/25.01" style={{ background: cardColor[1] }}>
            <H3 color={textColor[1]}>COSC 25.01</H3>
            <B1 color={textColor[1]}>Intro to UI/UX Design I</B1>
          </a>

          <a href="./courses/COSC/52" style={{ background: cardColor[2] }}>
            <H3 color={textColor[2]}>COSC 52</H3>
            <B1 color={textColor[2]}>Full-Stack Web Development</B1>
          </a>

          <a href="./courses/COSC/74" style={{ background: cardColor[3] }}>
            <H3 color={textColor[3]}>COSC 74</H3>
            <B1 color={textColor[3]}>Machine Learning</B1>
          </a>

          <a href="./courses/COSC/98.01" style={{ background: cardColor[4] }}>
            <H3 color={textColor[4]}>COSC 98.01</H3>
            <B1 color={textColor[4]}>Senior Design and Implementation I</B1>
          </a>
        </div>
      </main>

      <H3 className={styles.title}>Most Searched Professors</H3>

      <main className={styles.main}>
        <div className={styles.horizscroll}>
          <a
            href="/waitlist/waitlist-detail"
            style={{ background: cardColor[3] }}
          >
            <H3 color={textColor[3]}>COSC 10</H3>
            <B1 color={textColor[3]}>Problem Solving via OOP</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[5] }}>
            <H3 color={textColor[5]}>COSC 25.01</H3>
            <B1 color={textColor[5]}>Intro to UI/UX Design I</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[2] }}>
            <H3 color={textColor[2]}>COSC 52</H3>
            <B1 color={textColor[2]}>Full-Stack Web Development</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[1] }}>
            <H3 color={textColor[1]}>COSC 74</H3>
            <B1 color={textColor[1]}>Machine Learning</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[0] }}>
            <H3 color={textColor[0]}>COSC 98.01</H3>
            <B1 color={textColor[0]}>Senior Design and Implementation I</B1>
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

      <H3 className={styles.title}>23W Layups</H3>

      <main className={styles.main}>
        <div className={styles.horizscroll}>
          <a
            href="/waitlist/waitlist-detail"
            style={{ background: cardColor[0] }}
          >
            <H3 color={textColor[0]}>COSC 10</H3>
            <B1 color={textColor[0]}>Problem Solving via OOP</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[3] }}>
            <H3 color={textColor[3]}>COSC 25.01</H3>
            <B1 color={textColor[3]}>Intro to UI/UX Design I</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[1] }}>
            <H3 color={textColor[1]}>COSC 52</H3>
            <B1 color={textColor[1]}>Full-Stack Web Development</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[4] }}>
            <H3 color={textColor[4]}>COSC 74</H3>
            <B1 color={textColor[4]}>Machine Learning</B1>
          </a>

          <a href="../courseinfo" style={{ background: cardColor[5] }}>
            <H3 color={textColor[5]}>COSC 98.01</H3>
            <B1 color={textColor[5]}>Senior Design and Implementation I</B1>
          </a>
        </div>
      </main>
    </div>
  );
}
