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

const CourseTableMockData = [
  {
    courseNumber: 'COSC 52',
    courseName: 'Full Stack Web Development',
    term: '21F',
    quality: '4.0 (3)',
    difficulty: '3.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A-',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
  },
  {
    courseNumber: 'COSC 98.01',
    courseName: 'Senior Design and Implementation I',
    term: '19F',
    quality: '5.0 (3)',
    difficulty: '4.0 (3)',
    hrsPerWeek: '3.0 (4)',
    median: 'A',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
  },
  {
    courseNumber: 'COSC 98.02',
    courseName: 'Senior Design and Implementation II',
    term: '19W',
    quality: '5.0 (3)',
    difficulty: '5.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
  },
];

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
          {course.courseNumber}
        </TableCell>
        <TableCell align="left">{course.courseName}</TableCell>
        <TableCell align="left">{course.term}</TableCell>
        <TableCell align="left">{course.quality}</TableCell>
        <TableCell align="left">{course.difficulty}</TableCell>
        <TableCell align="left">{course.hrsPerWeek}</TableCell>
        <TableCell align="left">{course.median}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={styles.collapseContainer}>
              <TextLabel style={{ marginBottom: '10px', marginTop: '10px' }} color="var(--dark-grey)">Reviews</TextLabel>
              {course.reviews.map((review, i) => (
                <B3 style={{ marginBottom: '10px' }} color="var(--dark-grey)" key={review}>{review}</B3>
              ))}
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(props) {
  console.log(props);
  const courses = CourseTableMockData;
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
          {courses.map((course) => (
            <Row key={course.courseNumber} course={course} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
