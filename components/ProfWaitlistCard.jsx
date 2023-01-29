import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  B3, TextLabel,
} from './ui/typography';
import styles from '../styles/components/CourseTable.module.css';
// import { convertMedian } from './courses/Medians';

// function getTerms(offerings) {
//   const termArray = [];
//   offerings.forEach((offering) => {
//     termArray.push(offering.term);
//   });
//   const set = new Set(termArray);
//   return Array.from(set);
// }

const WaitlistMockData = [
  {
    courseNumber: 'COSC 52',
    courseName: 'Full Stack Web Development',
    offeredNextTerm: 'Yes',
    distribs: ['TLA', 'NW'],
    quality: '4.0 (3)',
    difficulty: '3.0 (3)',
    hrsPerWeek: '3.0 (3)',
    NREligible: 'Yes',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
  },
  {
    courseNumber: 'COSC 98.01',
    courseName: 'Senior Design and Implementation I',
    offeredNextTerm: 'Yes',
    distribs: ['SCI'],
    quality: '5.0 (3)',
    difficulty: '4.0 (3)',
    hrsPerWeek: '3.0 (4)',
    NREligible: 'No',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
  },
];

function Row(props) {
  const {
    course, tableType,
  } = props;
  const [open, setOpen] = React.useState(false);
  console.log(tableType);
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {tableType === 'profInfo' ? (
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
          </TableCell>
        ) : <TableCell />}
        <TableCell component="th" scope="row">
          {course.courseTitle}
        </TableCell>
        <TableCell align="left">{course.courseName}</TableCell>
        <TableCell align="left">{course.term ? course.term : course.offeredNextTerm}</TableCell>
        {course.distribs && tableType !== 'profInfo'
          ? <TableCell align="left">{course.distribs.map((distrib) => <p>{distrib}</p>)}</TableCell>
          : null}
        <TableCell align="left">{course.quality}</TableCell>
        <TableCell align="left">{course.difficulty}</TableCell>
        <TableCell align="left">{course.hrsPerWeek}</TableCell>
        {course.median ? <TableCell align="left">{course.median}</TableCell> : null}
        {course.NREligible && tableType !== 'profInfo'
          ? <TableCell align="left">{course.NREligible}</TableCell> : null}

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={styles.collapseContainer}>
              <TextLabel style={{ marginBottom: '10px', marginTop: '10px' }} color="var(--dark-grey)">Reviews</TextLabel>
              {course.reviews ? course.reviews.map((review) => (
                <B3 style={{ marginBottom: '10px' }} color="var(--dark-grey)" key={review}>{review}</B3>
              )) : <B3 style={{ marginBottom: '10px' }} color="var(--dark-grey)">No Reviews</B3>}
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(props) {
  // const { tableType } = props;
  const tableType = 'search';
  const courses = WaitlistMockData;
  // const tableType = 'profInfo';
  // const courses = CourseTableMockData;
  if (courses === {}) {
    return <div />;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        {tableType === 'profInfo'
          ? (
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="left">Course</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Term</TableCell>
                <TableCell align="left">Quality</TableCell>
                <TableCell align="left">Difficulty</TableCell>
                <TableCell align="left">Hrs/week</TableCell>
                <TableCell align="left">Median</TableCell>
              </TableRow>
            </TableHead>
          ) : (
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="left">Course</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Offered Next Term?</TableCell>
                <TableCell align="left">Distribs</TableCell>
                <TableCell align="left">Quality</TableCell>
                <TableCell align="left">Difficulty</TableCell>
                <TableCell align="left">Hrs/week</TableCell>
                <TableCell align="left">NR Eligible</TableCell>
              </TableRow>
            </TableHead>
          )}
        <TableBody>
          {courses.map((course) => (
            <Row key={course.courseNumber} course={course} tableType={tableType} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
