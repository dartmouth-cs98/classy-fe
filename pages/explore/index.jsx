import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/ExploreHome.module.css';
import SideNavbar from '../../components/SideNavbar';
import { H3, B1 } from '../../components/ui/typography';
import { fetchExplore } from '../../actions';
import ExploreTile from '../../components/explore/ExploreTile';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExplore());
  }, []);
  const exploreContent = useSelector((reduxState) => reduxState.explore.current);
  console.log(exploreContent, ' explorecontent');
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
          {exploreContent.courses ? exploreContent.courses.map((course, index) => (
            <ExploreTile
              cardColor={cardColor}
              textColor={textColor}
              courseDept={course.courseDept}
              courseNum={course.courseNum}
              courseTitle={course.courseTitle}
              index={index}
            />
          )) : ''}
        </div>
      </main>

      <H3 className={styles.title}>Most Searched Professors</H3>
      <main className={styles.main}>
        <div className={styles.horizscroll}>
          {exploreContent.professors ? exploreContent.professors.map((professor, index) => (
            <ExploreTile
              cardColor={cardColor}
              textColor={textColor}
              professorName={professor.name}
              professorDepts={professor.departments}
              index={index}
            />
          )) : ''}
        </div>
      </main>

      <div className={styles.buttondiv}>
        <a href="./explore/survey">
          <button type="button" className={styles.button}>
            <B1 color="white">Get a Recommendation!</B1>
          </button>
        </a>
      </div>

      <H3 className={styles.title}>Best Classes</H3>
      <main className={styles.main}>
        <div className={styles.horizscroll}>
          {exploreContent.professors ? exploreContent.professors.map((professor, index) => (
            <ExploreTile
              cardColor={cardColor}
              textColor={textColor}
              professorName={professor.name}
              professorDepts={professor.departments}
              index={index}
            />
          )) : ''}
        </div>
      </main>
    </div>

  );
}
