/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { convertMedian } from './courses/Medians';
import { nextTerm } from '../constants/nextTerm';

function offeredNext(offerings) {
  if (offerings) {
    return offerings.some((offering) => offering.term.toUpperCase() === nextTerm.toUpperCase());
  }
  return false;
}

function parseDistribs(distribs, worldCulture) {
  let result = '';
  if (distribs) {
    result = distribs.join(', ');
    if (worldCulture) {
      result = result.concat(` (${worldCulture})`);
    }
  }
  if (worldCulture && !distribs) {
    result = `(${worldCulture})`;
  }
  return result;
}

function createRowData(course) {
  return {
    _id: course._id,
    courseDept: course.courseDept,
    courseNum: course.courseNum,
    courseTitle: course.courseTitle,
    distribs: parseDistribs(course.distribs, course.worldCulture),
    median: convertMedian(course.avgMedian),
    offeredNext: offeredNext(course.offerings),
    nrEligible: course.nrEligible,
  };
}

export default function CourseTable(props) {
  const { courses } = props;
  const rows = courses?.map((course) => createRowData(course));
  // console.log(rows);
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="120">Course</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center" width="140">Distribs (WC)</TableCell>
            <TableCell align="center">Median</TableCell>
            <TableCell align="center">
              Offered&nbsp;
              {nextTerm}
            </TableCell>
            <TableCell align="center" width="120">NR Eligible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log('courses', courses)}
          {courses.map((course) => (
            <Row
              key={`${course.courseDept} ${course.courseNum}`}
              course={course}
              tableType={tableType}
              professorName={professorName}
            />
          {rows?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              hover
              // component={Link}
              // href={`/courses/${row.courseDept}/${row.courseNum}`}
              onClick={() => router.push(`/courses/${row.courseDept}/${row.courseNum}`)}
            >
              <TableCell>
                {`${row.courseDept} ${row.courseNum}`}
              </TableCell>
              <TableCell align="left">{row.courseTitle}</TableCell>
              <TableCell align="center">{row.distribs}</TableCell>
              <TableCell align="center">{row.median}</TableCell>
              <TableCell align="center">{row.offeredNext ? <CheckIcon /> : null}</TableCell>
              <TableCell align="center">{row.nrEligible ? <CheckIcon /> : null}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
