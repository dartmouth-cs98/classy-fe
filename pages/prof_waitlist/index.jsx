import React from 'react';
import {
  MdAddCircle,
} from 'react-icons/md';
import {
  H1,
} from '../../components/ui/typography';
import styles from '../../styles/ProfWaitlist.module.css';
import ProfWaitlistTerm from '../../components/profWaitlist/ProfWaitlistTerm';

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
    <div className={styles.all}>
      <div className={styles.header}>
        <H1>COSC 25 Waitlists</H1>
      </div>

      <MdAddCircle className={styles.addbtn} size={25} />
      <br />
      <br />
      <div className={styles.body}>
        {professorInfoMockData.featuredCourses.map((course, i) => (
          <ProfWaitlistTerm
            color={cardColors[i % cardColors.length]}
            i={i}
          />
        ))}
      </div>

    </div>

  );
}

export default ProfWaitlist;
