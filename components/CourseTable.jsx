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

function getTerms(offerings) {
  const termArray = [];
  offerings.forEach((offering) => {
    termArray.push(offering.term);
  });
  const set = new Set(termArray);
  return Array.from(set);
}

function Row(props) {
  const {
    course,
  } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {course.courseTitle}
        </TableCell>
        <TableCell align="left">
          {course.courseDept}
          {' '}
          {course.courseNum}
        </TableCell>
        <TableCell align="left">{getTerms(course.offerings).join(', ')}</TableCell>
        <TableCell align="left">{course.quality ? course.quality : 'N/A'}</TableCell>
        <TableCell align="left">{course.difficulty ? course.difficulty : 'N/A'}</TableCell>
        <TableCell align="left">{course.hrsPerWeek ? course.hrsPerWeek : 'N/A' }</TableCell>
        <TableCell align="left">{convertMedian(course.avgMedian)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={styles.collapseContainer}>
              <TextLabel style={{ marginBottom: '10px', marginTop: '10px' }} color="var(--dark-grey)">Reviews</TextLabel>
              {course.reviews ? course.reviews.map((review) => (
                <B3 style={{ marginBottom: '10px' }} color="var(--dark-grey)">{review}</B3>
              )) : <B3 style={{ marginBottom: '10px' }} color="var(--dark-grey)">No Reviews</B3>}
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(props) {
  const { courses } = props;
  if (courses === {}) {
    return <div />;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
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
        <TableBody>
          {courses ? courses.map((course) => (
            <Row key={`${course.courseDept}${course.courseNum}`} course={course} />
          )) : ''}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
