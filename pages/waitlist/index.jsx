// import React, { useEffect } from 'react';
import React from 'react';
// import Head from 'next/head';
// import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/WaitlistHome.module.css';
// import SideNavbar from '../../components/SideNavbar';
import { H2 } from '../../components/ui/typography';
// import WaitlistModal from '../../components/waitlist/WaitlistModal';
import WaitlistCard from '../../components/waitlist/WaitlistCard';
// import { fetchWaitlists } from '../../actions';

const cardColors = [
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
  { pastel: '#FCF0E3', dark: '#BA7D37' },
];

const waitlistMockData = {
  courses: [
    {
      courseDepartment: 'COSC',
      courseNum: '52',
      courseName: 'Full-Stack Web Development',
      waitlistPos: 10,
      waitlistTotal: 76,
      terms: ['23S', '24S', '25S'],
      joined: 'June 21, 2022',
      comments: '',
    },
    {
      courseDepartment: 'COSC',
      courseNum: '74',
      courseName: 'Machine Learning and Statistical Data Analysis',
      waitlistPos: 2,
      waitlistTotal: 14,
      terms: ['23W'],
      joined: 'April 10, 2022',
      comments: '',
    },
    {
      courseDepartment: 'MATH',
      courseNum: '001',
      courseName: 'Introduction to Calculus',
      waitlistPos: 5,
      waitlistTotal: 7,
      remainingTerms: 1,
      terms: ['25F'],
      joined: 'August 14, 2022',
      comments: '',
    },
    {
      courseDepartment: 'ECON',
      courseNum: '001',
      courseName: 'The Price System: Analysis, Problems, and Policies',
      waitlistPos: 32,
      waitlistTotal: 35,
      remainingTerms: 2,
      terms: ['23X'],
      joined: 'November 11, 2022',
      comments: '',
    },
  ],
};

export default function WaitlistHome() {
  return (
    <div className={styles.container}>
      <H2 color="#14121D">Waitlisted Courses</H2>
      <p color="#14121D">Join a new waitlist from the course info page.</p>
      <div className={styles.waitlistCardsContainer}>
        {waitlistMockData.courses.map((course, i) => (
          <WaitlistCard course={course} color={cardColors[i % cardColors.length]} />
        ))}
      </div>
    </div>
  );
}
// export default function WaitlistHome() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchWaitlists());
//   }, []);
//   const waitlistContent = useSelector((reduxState) => reduxState.waitlist.current);
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Classy</title>
//         <meta name="description" content="Cool tagline here" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <SideNavbar />

//       <H2 className={styles.title}>
//         My Waitlists
//       </H2>

//       <main className={styles.main}>
//         <B1 className="description">
//           Join new waitlists from the course info page.
//         </B1>

//         <div className={styles.grid}>
//           {waitlistContent.courses ? waitlistContent.courses.map((course, index) => (
//             <WaitlistModal
//               course={course}
//               // studentId={`ObjectId('${waitlistContent.student._id}')`}
//               // eslint-disable-next-line no-underscore-dangle
//               studentId={`ObjectId('${waitlistContent.student._id}')`}
//               onWaitlist
//               index={index}
//               entryPoint="waitlist"
//             />
//           )) : ''}
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="_blank"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Classy

//         </a>
//       </footer>
//     </div>
//   );
// }
