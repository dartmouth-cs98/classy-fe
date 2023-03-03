/* eslint-disable no-unused-vars */
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
import { convertMedian } from './courses/Medians';

// function getTerms(offerings) {
//   const termArray = [];
//   offerings.forEach((offering) => {
//     termArray.push(offering.term);
//   });
//   const set = new Set(termArray);
//   return Array.from(set);
// }

function Row(props) {
  const {
    course, tableType, professorName,
  } = props;
  const [open, setOpen] = React.useState(false);

  const loadReviews = () => course?.offerings?.map((offering) => {
    if (!offering.professors.includes(professorName)) return '';
    return offering.reviews?.map((review) => (
      <B3
        style={{ marginBottom: '10px' }}
        color="var(--dark-grey)"
        key={review}
      >
        {review.content}
      </B3>
    ));
  });

  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
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
        ) : null}
        <TableCell component="th" scope="row">
          {course.courseTitle}
        </TableCell>
        <TableCell align="left">{`${course.courseDept} ${course.courseNum}`}</TableCell>
        <TableCell align="left">
          {course.term ? course.term : course.offeredNextTerm}
        </TableCell>
        {course.distribs && tableType !== 'profInfo' ? (
          <TableCell align="left">
            {course.distribs.map((distrib) => (
              <p>{distrib}</p>
            ))}
          </TableCell>
        ) : null}
        <TableCell align="left">{course.quality}</TableCell>
        <TableCell align="left">{course.difficulty}</TableCell>
        <TableCell align="left">{course.hrsPerWeek}</TableCell>
        {course.avgMedian ? (
          <TableCell align="left">{convertMedian(course.avgMedian)}</TableCell>
        ) : null}
        {course.nrEligible && tableType !== 'profInfo' ? (
          <TableCell align="left">{course.nrEligible}</TableCell>
        ) : null}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={styles.collapseContainer}>
              <TextLabel
                style={{ marginBottom: '10px', marginTop: '10px' }}
                color="var(--dark-grey)"
              >
                Reviews
              </TextLabel>
              {loadReviews()}
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(props) {
  const { courses, tableType, professorName } = props;
  if (!courses) {
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
                {/* <TableCell /> */}
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
          {console.log('courses', courses)}
          {courses.map((course) => (
            <Row
              key={`${course.courseDept} ${course.courseNum}`}
              course={course}
              tableType={tableType}
              professorName={professorName}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
