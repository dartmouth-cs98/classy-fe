/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from '../../styles/ExploreSurvey.module.css';
import SideNavbar from '../../components/SideNavbar';
import {
  H2, H4, B1,
} from '../../components/ui/typography';

export default function ExploreSurvey() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="class selection made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />

      <div className={styles.header}>
        <H2 className={styles.title}>
          Course Recommendation
        </H2>

        <button type="button" onClick="window.location.href='./survey';" className={styles.exitbutton}>
          <B1 color="white">Exit</B1>
        </button>
      </div>

      <B1>
        To get course recommendation, we need a few information about you first
      </B1>

      <H4 className={styles.question}>
        How important to you is course review when selecting courses?
      </H4>

      <div className={styles.footer}>
        <button type="button" onClick="window.location.href='./survey';" className={styles.button}>
          <MdKeyboardArrowLeft />
        </button>

        <button type="button" onClick="window.location.href='./survey';" className={styles.button}>
          <MdKeyboardArrowRight />
        </button>
      </div>

    </div>
  );
}
