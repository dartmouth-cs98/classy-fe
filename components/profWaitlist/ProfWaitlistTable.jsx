/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
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
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {
  B1,
} from '../ui/typography';
import getColor from '../../data/colorscheme';
import { updatePriority } from '../../actions';

function Row(props) {
  const {
    waitlist, courseId, spot, dept, num, i,
  } = props;
  const [priority, setPriority] = React.useState(spot === 'PRIORITY');
  const studentId = waitlist?._id;
  const dispatch = useDispatch();
  //   const course = useSelector((reduxState) => reduxState.waitlist.current);

  const findReasoning = () => {
    for (const reason of waitlist.waitlistReasons) {
      if (reason.course === courseId) {
        return reason.reason;
      }
    }
    return '';
  };
  const prioritize = (event) => {
    event.preventDefault();
    setPriority(!priority);
    dispatch(updatePriority(dept, num, i, studentId, priority));
  };

  console.log('row', waitlist);

  const loadEmailLink = () => {
    const mailto = `${waitlist?.user?.email}`;
    const subject = `${`${dept} ${num}` || ''} Waitlist`;
    const body = `Dear ${waitlist?.user?.firstName},
            %0D%0A%0D%0AThank you for your interest in my course. About your waitlist inquiry on Classy...`;
    return (
      <Link
        href={`mailto: ${mailto}?subject=${subject}&body=${body}`}
      >
        <B1>
          {waitlist?.user?.email?.substring(0, waitlist.user.email.length - 14)}
        </B1>
      </Link>
    );
  };
  const studentName = `${waitlist?.user?.firstName} ${waitlist?.user?.lastName}`;
  const netID = waitlist?.user?.netID;
  const priorityBtn = (
    <Button
      type="button"
      style={{ background: getColor('prioritize', priority) }}
      onClick={prioritize}
    >
      {priority ? 'Unprioritize' : 'Prioritize'}
    </Button>
  );
  const cellVals = [studentName, loadEmailLink(), netID, findReasoning(), priorityBtn];

  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell />
      <TableCell component="th" scope="row">
        {priority ? <strong>PRIORITY</strong> : spot}
      </TableCell>
      {cellVals.map((val) => (
        <TableCell align="left">
          {val}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default function CollapsibleTable(props) {
  const {
    courseId, offering, dept, num, i,
  } = props;
  if (!offering.waitlist && !offering.priorityWaitlist) {
    return <div />;
  }

  const calculateSpot = (index) => (offering?.priorityWaitlist?.length
    ? offering.priorityWaitlist.length + index + 1
    : index + 1);

  const loadHeaderRow = (strings) => (
    <TableHead>
      <TableRow>
        {strings.map((string) => (
          <TableCell align="left">
            <strong>{string}</strong>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const loadRow = (student, spot) => (
    <Row
      key={student._id}
      waitlist={student}
      courseId={courseId}
      dept={dept}
      num={num}
      spot={spot}
      i={i}
    />
  );

  const headerValues = ['', 'Spot #', 'Student Name', 'Email (@dartmouth.edu)', 'Student ID', 'Reasoning', 'Prioritize'];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        {loadHeaderRow(headerValues)}
        <TableBody>
          {offering?.priorityWaitlist?.map((student) => loadRow(student, 'PRIORITY'))}
          {offering?.waitlist?.map((student, index) => loadRow(student, calculateSpot(index)))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
