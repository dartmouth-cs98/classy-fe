import React from 'react';
// import { Button } from '@react-md/button';
import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from 'react-icons/md';
import {
  H1, H5, B1,
} from '../../components/ui/typography';
import styles from '../../styles/components/ProfWaitlist.module.css';
import ProfWaitlistTerm from '../../components/profWaitlist/ProfWaitlistTerm';
import ProfWaitlistTable from '../../components/profWaitlist/ProfWaitlistTable';

const professorInfoMockData = {
  featuredCourses: [{
    courseNumber: 'COSC 52',
    courseName: 'Full Stack Web Development',
    term: '21F',
    quality: '4.0',
    difficulty: '3.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A-',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
  },
  ],
  allCourses: [
    {
      courseNumber: 'COSC 52',
      courseName: 'Full Stack Web Development',
      term: '21F',
      quality: '4.0',
      difficulty: '3.0 (3)',
      hrsPerWeek: '3.0 (3)',
      median: 'A-',
      reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
      distribs: ['TLA', 'NW'],
      location: 'ECSC202',
    },
  ],
};

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function ProfWaitlist() {
  return (
    <div style={{ padding: '50px 80px 50px 290px' }}>

      <H1 style={{ paddingBottom: '50px' }}>COSC 25 Waitlists</H1>

      <div>
        {professorInfoMockData.featuredCourses.map((course, i) => (
          <ProfWaitlistTerm
            color={cardColors[i % cardColors.length]}
          />
        ))}
      </div>
      <ProfWaitlistTable />

      <div>
        <H5 className={styles.text}>viewing 2/25 signups</H5>
      </div>

      <div className={styles.pagination}>
        {/* <Button buttonType="icon" className={styles.btn1}> */}
        <MdOutlineChevronLeft />
        {/* </Button> */}
        <ul className={styles.pagenum}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <MdOutlineChevronRight />
      </div>

    </div>

  );
}

export default ProfWaitlist;
