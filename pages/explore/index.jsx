import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styles from '../../styles/ExploreHome.module.css';
import SideNavbar from '../../components/SideNavbar';
import { H3, B1 } from '../../components/ui/typography';
import { fetchExplore } from '../../actions';
import ExploreTile from '../../components/explore/ExploreTile';

export default function ExploreHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExplore());
  }, []);
  const exploreContent = useSelector((reduxState) => reduxState.explore.current);

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
              key={`s${course.courseDept}${course.courseNum}`}
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
              key={professor.name}
              professorName={professor.name}
              professorDepts={professor.departments}
              index={index}
            />
          )) : ''}
        </div>
      </main>

      <div className={styles.buttondiv}>
        <Link href="./explore/survey">
          <button type="button" className={styles.button}>
            <B1 color="white">Get a Recommendation!</B1>
          </button>
        </Link>
      </div>

      <H3 className={styles.title}>Best Classes</H3>
      <main className={styles.main}>
        <div className={styles.horizscroll}>
          {exploreContent.courses ? exploreContent.courses.map((course, index) => (
            <ExploreTile
              key={`b${course.courseDept}${course.courseNum}`}
              courseDept={course.courseDept}
              courseNum={course.courseNum}
              courseTitle={course.courseTitle}
              index={index}
            />
          )) : ''}
        </div>
      </main>
    </div>
  );
}
